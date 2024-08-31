npm install; npm run build

vscode trick(ctrl+p; #the_constant)

yt reference:https://www.youtube.com/watch?v=ZpIel9cv4Jk

## Project Structure

Here’s a brief overview of the primary files and their roles:

### `App.jsx`

This is the root component of your application. It includes:

- `Hero` - A section for your introduction or main content.
- `Projects` - Displays a list of projects with interactive elements.
- `Footer` - Contains footer information and is included at the bottom of the page.

### `App.css`

This file contains global styles and animations for your application, including:

- A gradient background animation that transitions smoothly.
- Basic styling for the `body` and `.App` to ensure the content is centered and visually appealing.

### `Projects.jsx`

This component showcases various projects in a grid layout. Key features include:

- `ProjectCard` - A reusable component for displaying project information.
- Modal functionality to show detailed information when a project is clicked.
- Handling for both images and videos.

### `ProjectsStyles.module.css`

CSS module specifically for styling the `Projects` component:

- Flexbox layout for arranging project cards.
- Styles for modals and overlays to ensure a smooth user experience.

### `Hero.jsx`

The hero section introduces the main person or content of the site:

- Displays a name, title, description, and a LinkedIn link.
- Includes a contact button that triggers a contact form overlay.

### `HeroStyles.module.css`

CSS module for styling the `Hero` component:

- Flexbox layout for centering content.
- Styles for the contact button and LinkedIn link.

### `ProjectCard.jsx`

A reusable card component used within the `Projects` component to display individual project details:

- Displays a heading and handles clicks to open modals.

## Getting Started

### Installation

Ensure you have Node.js and npm installed. Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### Running the Development Server

To start the development server, use:

```bash
npm start
```
or 
```bash
npm run dev
```


### Customizing the Application

- **`Hero.jsx`**: Modify the text or add additional content to customize the hero section.
- **`Projects.jsx`**: Update the list of projects by adding or removing `ProjectCard` components and adjust their props as needed.
- **`App.css`**: Tweak the global styles and background animations to match your design preferences.

### Adding New Projects

To add a new project:

1. Import the asset (image or video) into `Projects.jsx`.
2. Add a new `ProjectCard` component with the appropriate props:
   ```jsx
   <ProjectCard
     src={newAsset}
     h3="New Project Title"
     p="Description of the new project."
     onButtonClick={() => handleOpenModal({ src: newAsset, h3: "New Project Title", p: "Description of the new project." })}
   />
   ```

### Contact Form

- The `Hero.jsx` component includes a button to show the contact form overlay. Update the `ContactForm` component in the `Contact` directory as needed.




GIT REFERENCE:-------------------------------------------------------------------------------------------------
GIT UPLOAD:

# Initialize Git repository if not already done
git init

# Add files and commit changes
git add .
git commit -m "Initial commit"

# Add the remote repository URL
git remote add origin https://github.com/Abdullaqamar/portfolio.git

# Verify the remote URL
git remote -v

# Check the current branch
git branch

# Rename branch to 'main' if necessary
git branch -M main

# Push the 'main' branch to GitHub
git push -u origin main


UPDATE CHANGES:
git add .                          # Stage all changes
git commit -m "Update styles and fix responsiveness"  # Commit changes with a message
git push origin main              # Push changes to the main branch



