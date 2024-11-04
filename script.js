// Select DOM elements
const songNameInput = document.getElementById('songName');
const artistNameInput = document.getElementById('artistName');
const youtubeLinkInput = document.getElementById('youtubeLink');
const playlistContainer = document.getElementById('playlistContainer');

// Scroll to Playlist section
function scrollToPlaylist() {
    document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
}

// Validate and convert YouTube link to embed URL
function isValidYouTubeLink(url) {
    const regex = /^(https:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return regex.test(url);
}

// Convert standard YouTube links into embed URLs
function convertToEmbedURL(url) {
    const videoID = url.split("v=")[1] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoID}`;
}

// Fetch video details from noembed API
async function fetchVideoDetails(url) {
    const response = await fetch(`https://noembed.com/embed?url=${url}`);
    const data = await response.json();
    return {
        title: data.title,
        author: data.author_name
    };
}

// This adds a new song to the playlist
async function addSong() {
    const youtubeLink = youtubeLinkInput.value;

    // Validate the YouTube link
    if (!isValidYouTubeLink(youtubeLink)) {
        alert("Please enter a valid YouTube link.");
        return;
    }

    // This gets the song and artist names from the input fields
    let songName = songNameInput.value || "";
    let artistName = artistNameInput.value || "";

    // Fetch details if song or artist name is missing
    if (!songName || !artistName) {
        const details = await fetchVideoDetails(youtubeLink);
        songName = songName || details.title;
        artistName = artistName || details.author;
    }

    const embedURL = convertToEmbedURL(youtubeLink);

    // Creates a new song entry element
    const songEntry = document.createElement('div');
    songEntry.classList.add('song-entry');
    songEntry.innerHTML = `
    <input type="text" class="editable" value="${songName}" readonly />
    <input type="text" class="editable" value="${artistName}" readonly />
    <iframe src="${embedURL}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <div class="action-buttons">
      <button onclick="enableEdit(this)"><i class="fas fa-edit"></i> Edit</button>
      <button onclick="deleteSong(this)"><i class="fas fa-trash-alt"></i> Delete</button>
      <button style="display: none;" onclick="saveSong(this)"><i class="fas fa-save"></i> Save</button>
    </div>
  `;

    // Append the new song entry to the playlist
    playlistContainer.appendChild(songEntry);

    // Clear input fields after adding a song
    songNameInput.value = '';
    artistNameInput.value = '';
    youtubeLinkInput.value = '';
}

// Enable edit mode on the song entry
function enableEdit(button) {
    const songEntry = button.closest('.song-entry');
    const inputs = songEntry.querySelectorAll('.editable');
    const saveButton = songEntry.querySelector('.action-buttons button[onclick="saveSong(this)"]');

    // Set inputs to editable
    inputs.forEach(input => input.removeAttribute('readonly'));

    // Show save button, hide edit button
    button.style.display = 'none';
    saveButton.style.display = 'inline-block';
}

// Save the edited song entry
function saveSong(button) {
    const songEntry = button.closest('.song-entry');
    const inputs = songEntry.querySelectorAll('.editable');
    const editButton = songEntry.querySelector('.action-buttons button[onclick="enableEdit(this)"]');

    // Set inputs back to read-only
    inputs.forEach(input => input.setAttribute('readonly', true));

    // Show edit button, hide save button
    button.style.display = 'none';
    editButton.style.display = 'inline-block';
}

// Delete the song entry
function deleteSong(button) {
    const songEntry = button.closest('.song-entry');
    songEntry.remove();  // Removes the entire song entry, not just the buttons
}

