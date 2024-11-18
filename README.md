# Music Playlist Manager

A dynamic web application that allows users to manage a personalized music playlist by adding songs via YouTube links. The app automates song and artist information extraction, embeds YouTube videos for direct playback, and provides straightforward options to edit and delete entries directly within the playlist table.

> **Note**: This application is optimized for desktop and laptop viewing only, as media queries for mobile devices were not included.

## Features

- **Add Songs**: Easily add songs to your playlist by entering a YouTube link, along with optional song and artist names. If left blank, the application automatically retrieves the song and artist names using [noembed](https://noembed.com/).
- **Inline Editing**: Update song and artist details directly in the playlist table. Simply click **Edit**, make your changes, and hit **Save** to update the entry.
- **Embedded Video Playback**: Each entry includes an embedded YouTube video, allowing you to listen to your playlist directly within the application.
- **Delete Functionality**: Remove any song entry from the playlist with a single click.
- **Sleek, Desktop-Friendly UI**: The app has a user-friendly layout optimized for laptops and desktops, featuring Font Awesome icons for intuitive interaction.


## How to Use

1. **Add a Song**: Enter a YouTube link, song name, and artist name, then click **Add**. If the song name or artist name is omitted, the app fetches these details automatically.
2. **Edit a Song**: Click **Edit** next to a song entry to make changes directly in the table. When done, click **Save** to confirm.
3. **Delete a Song**: Click **Delete** to remove a song from the playlist.

## Technical Overview

The Music Playlist Manager is built with HTML, CSS, and JavaScript, utilizing:
- **Font Awesome Icons** for intuitive controls.
- **noembed API** for retrieving song and artist information from YouTube links.
- **JavaScript** for managing playlist entries, inline editing, and UI interactivity.

## Credits

This project was created with the assistance of AI for developing key functionalities, resolving coding challenges, and structuring documentation.

---