![Las Mari's logo](./src/images/maris_logo_readme.svg)

# Las Mari's Awesome Profile Cards

Our cliend asked us to create an online profile/business card generator and so we did, using `JavaScript` to make it interactive.
We followed Scrum philosophy to work in this project and organized our milestones in a kanban board:

[See our Kanban board](https://github.com/Adalab/project-promo-o-module-2-team-9/projects/1)

## Layout

First, we followed Zeplin guidelines and built the project structure using **Adalab Web starter kit**, created `branches` and divided it into `partials` so that we could all work remotely and efficiently.

## Programming our web with JavaScript

We set three main sections: **design**, **fill** and **share**. These three sections allowed the user to add their personal information to the card and personalize, and these changes are automatically rendered in the **preview** section on top (mobile) or on the right (for tablet and desktop version).
Each section is collapsable so it won't disturb the user while interacting with other fieldsets. [^1]

### :paintbrush: Design

The user can decide the color combination from three palettes provided. Once selected, the elements in the card preview will change accordingly.

### :keyboard: Fill

The user can write down their first name and job description. They can also add their phone number, email address, linkedin and github profile, so that once the card is created the user can access to the link by clicking on the icon.
An image can also be added from the user's library. This was achieved by using an external component.

### :incoming_envelope: Share

The last step is creating a card. Once all the mandatory fields are filled, a message will pop upon clicking the "Create card" button, which will deactivate and show a link to the created card and an option to share it on Twitter.

> User Experience: animation was added with CSS in order to achieve a better understanding and interaction with the program.

# Achievements

In this project, we learnt how to:

- [x] Coordinate and work together in a team of four people from different backgrounds
- [x] Succesfully create an interactive application with automatic results shown in the preview section
- [x] Learnt to use:

```
constants
functions
arrays and array methods
objects
APIS
interact with DOM elements
```

- [x] Create a polished graphic interface and an intuitive experience
- [x] Using `git` to control different versions of the project and solving
- [x] Implement error messages to guide the user when something is not working as expected (for instance, a card was not created because some fields were not complete or met valid requirements)
- [x] Deliver work timely and follow Scrum guidelines for better organization within the group.

[^1]: Default values are: the first palette for design fieldset, placeholder text and non-existent links for social media, and an error message if the user did not submit all the required data to create a card.
