
# True or False 


True or False is a simple quiz app presenting the user with a question. Is it true or false?

Click [here](https://alexpullen91.github.io/True-or-False/) to play


---

# Contents
1. [UX / Project Goals](#ux)
2. [User Goals](#user-Goals)
3. [User Stories](#user-stories)
4. [Design Choices](#design-choices)
5. [Wireframes](#wireframes)
6. [Features & Potential Future features](#features)
7. [Technologies used](#languages)
8. [Testing](#testing)
9. [Issues and resolutions](#issues-and-resolutions)
10. [Deployment](#deployment)
11. [Credits](#credits)
---

## UX


### Project Goals

Provide a simple but engaging user experience for someone interested in playing a general knowledge trivia game.

#### User goals

* Something quick, simple and engaging.
* Easily navigated user interface.
* Fun and challenging.
* Interesting variety of questions.
* Ability to save and check high scores.

#### User stories

* *"As a trivia game fan I expect to be appropriately challenged by the questions"*
* *"As a user I expect to be able to navigate straight into a game from the landing page"*
* *"As a competitive player I expect to be able to log my scores and compare them with those of others"*
* *"As a user I expect real time feedback to my input when I interact with the site"*
* *"As a user I expect to be able to play multiple times with a refreshed set of questions each time"*
* *"As a user I expect to have the option to play again immediately when I finish"*

---

## Design Choices
* User interface situated centrally in the screen leaving lots of space outside of it to be used by background effect.
* [Particle](https://marcbruederlin.github.io/particles.js/) effect in the background to create interesting visual for the user reminiscent of DNA structures and sci-fi style interfaces.
* Less is more approach to avoid cluttering the UI with unnecessary features and icons.
* Indigo dye #1a4e6e and Honolulu blue #2c6e96 combine to make a [gradient background](https://cssgradient.io/)
* White #FFFFFF for the particle effect and font color.
* Green #00af14 and Red #e20000 for the right and wrong answer modal button.
* [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?sort=popularity&preview.text=Question+number+1+2+3+4+5+6&preview.text_type=custom&sidebar.open&selection.family=Roboto+Mono:wght@300) for font family.

---

### Wireframes


I used [Balsamiq](https://balsamiq.com/) to create wireframes for **mobile, tablet and desktop.**

You can find my wireframes [here](https://github.com/AlexPullen91/True-or-False/tree/master/wireframes).

---

### Features

* Main menu with play again button and high scores button.
* Game section featuring [API generated questions](https://opentdb.com/) presenting user with clickable option between true or false.
* Mousing over buttons to give hover effect signalling interactivity to users.
* Score saving system allowing users to compare scores before and after games.
* Social media links at the bottom of the page linking to author.

#### Potential Future features

* Particle effect to respond to user input to increase feeling of interactivity.
* Choice of topics
* Audio and audio feedback to user input

---

## Languages

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [Javascript](https://www.javascript.com/) 

---

## Libraries

* [Google Fonts](https://fonts.google.com/)
* [sweetalert2](https://sweetalert2.github.io/)

---

## Technologies 

* [Github](https://github.com/) to host this project's respositories.
* [Gitpod](https://www.gitpod.io/) IDE of choice for development.
* [Git](https://git-scm.com/) for version control

---

## Tools

* [Google Chrome developer tools](https://developers.google.com/web/tools/chrome-devtools)
* [Open Trivia Database API](https://opentdb.com/)
* [CSS Gradient](https://cssgradient.io/)
* [Particles](https://marcbruederlin.github.io/particles.js/)
* [Balsamiq](https://balsamiq.com/)
* [Coolers](https://coolors.co/)

---

## Testing

Testing for responsiveness throughout development was carried out with google chrome developer tools and the device toolbar to ensure compatibility on all screen sizes.

## Manual Testing

**Submitting a high score**

    1. Moused over username field to see cursor change and signal typing is available.
    2. Clicked to enter and typed in "name".
    3. Moused over save to see cursor has changed to pointer instead of no entry sign and then clicked.
    4. Moused over to high scores button and clicked. Page changes to highscores.html and "name" is correctly displayed.


### Issues and Resolutions

* During development I encountered a problem when writing the conditional statement to determine if the correct answer was being selected. False was reliably returned on every instance which turned out to be due to the wrong use of operator.  Because I was comparing string values I changed == to the strict equality operator === and this solved the problem.

### Known Issues


---

## Deployment

True or False was developed on GitPod, using git and GitHub to host the repository.

__When deploying True or False using GitHub Pages be sure to follow these steps:__

1. Navigate to '/AlexPullen91/True-or-False' or alternatively click [here](https://github.com/AlexPullen91/True-or-False).
2. In the top navigation click on 'settings'.
3. Scroll down to the GitHub Pages area.
4. Select 'Master Branch' from the 'Source' dropdown menu.
5. Click to confirm my selection.
6. True or False should now be live on GitHub Pages.

__In order to run True or False locally be sure to follow these steps whilst still on Github:__

1. Navigate to '/AlexPullen91/True-or-False' or alternatively click [here](https://github.com/AlexPullen91/True-or-False)..
2. Click the green 'Clone or Download' button.
3. Copy the url in the dropdown box.
4. Using your IDE of choice open up your preferred terminal.
5. Navigate to your desired file location.
6. Copy the following code and input it into your terminal to clone True or False.

```git clone https://github.com/AlexPullen91/True-or-False.git```

---

---

## Credits


### Content

* Questions retrieved from [Open Trivia Database API](https://opentdb.com/)

### Code

* [James Q Quick's brilliant video series](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx) was instrumental in learning how to write the JavaScript for this site.
* [sweetalert2](https://sweetalert2.github.io/) for modals.

### Acknowledgements

