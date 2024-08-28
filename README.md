# spam-i-am 
<img src="./public/images/hero_images/spam_classic_text.png" alt="A beautiful classic can of SPAM" style="width: 100px;"/>

### An experimental mini-multidays project in Tāmaki
#### Not sponsored by Hormel Foods Corporation (yet)

-----

Welcome to the wonderful world of SPAM! This spam-packed multidays project is designed to help you learn to work collaboratively together as a cohort on one big project. Along the way you'll consolidate your learnings from the Bootcamp curriculum, write code which emphasises quality over quantity, and be exposed to a larger and more complex codebase. 

---

### External documentation 

- [Figma wireframes](https://www.figma.com/design/vuRQXZ9V8QIMZPrJ3oKrpf/SPAM?node-id=0-1)
- [ERD Diagram](./resources/ERD-diagram.png) 

---

### Getting started 

Assign roles 
<details>

#### 2x Git Leads 
- Have a pair as Git Leads. These leads will review and approve any merges to main.
- Perhaps use that template that Logan shared last week?
- Top tip, all devs should pull changes from main into their own local branch and deal with any merge conflicts BEFORE they make a Pull        Request, this will make the whole process smoother. Make sure you commit and push any existing changes in your local branch up to          Github, BEFORE you pull from main into your local branch.
- All other devs need to communicate with the gitleads pair if they have made a pull request.
- Once a pull request has been merged, ring the bell to celebrate! And also to inform the rest of the team to pull any changes from main     into their branch. 

#### 2x Vibes Leads
- Play some sweet tunes
- Make sure folks take regular breaks, drink water, eat snacks
- Come up with a plan for communal lunch?
- If there are any stresses or conflicts of opinion, listen to folks, and try to figure out a solution together - get support from facilitators if needed. 

#### 4x Presentation Folks (2 pairs) 

- This group will organise the presentation, which will be a  slightly different format to your FGP presentations.
- 1 person per topic, each person responsible for getting info from the rest of the group about their topic, and summarising it for the presentation.
- Person 1: Intro and Demo the App
- Person 2: Go through Project Board and recognise the work everyone did.
- Person 3: Roles - who did what and how
- Person 4: Talk about Challenges and Learnings
- Tip - have some basic slides for talking points, and maybe some screenshots/photos if applicable
    
</details>

Choose a ticket 
<details>
  <p>Go to the Project Board in the Projects tab of this repo to find the tickets, each of which are connected to an issue. Once you and your pair have found a ticket you want to work on, please assign yourselves to that ticket so everyone else knows you've taken it. Remember to drag your ticket to the 'In progress' column on the board.</p>
</details>

Clone this project down and make a new branch for your ticket 
<details>
  
``` 
  npm i 
  gco -b "Ticket no/Ticket name"
  npm run knex migrate:latest
  npm run knex seed:run
  nrd
```

</details>

---

### Git Workflow 
How to contribute to this project 
<details>
  <p>The main branch will be protected, which means you can't just push to main! Here's what we recommend for your workflow:</p>
  
  - Make changes to your own branch, and commit and push to Github 
  - Commit frequently, and write [good quality commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) 
  - When you've finished your ticket and are ready to merge your branch into main, ensure all your latest changes are pushed up to Github and raise a pull request. Go and ask the Git Leads to take a look at your PR and merge it into main. If there are merge conflicts to resolve, it may be helpful to sit down with the Git Leads and mob code the merge. 
  - Remember to close the issue associated with your ticket, and drag your ticket to 'Done' on the project board!
  - Once the ticket is merged, the Git Leads should ring the bell and let everyone know to pull from main into their branches.  
</details>

---
### How to access authenticated routes in Thuderclient 
<details>
  
#### Getting an access token

Suppose, you've created a new user called hello@example.com and the password is abc_123 and you want to generate an access token for this user so that you can test your server-side routes.

- Open Thunderclient and fill in the following information:

- URL: **POST** `https://spam-matai-2024.au.auth0.com/oauth/token`
- **_For THUNDERCLIENT:_** Change the body to `Form-encode` and fill the following key/value pairs:

| key           | value                                           |
| ------------- | ----------------------------------------------- |
| audience      | https://spam/api                                |
| grant_type    | password                                        |
| client_id     | Wq4NM9ebbHVPGT6KHd3nq5EVeWwWHT5c                |
| client_secret | qVm4XnE1vIwHrmYLhjnNc1ujQb-YNa1XDd4WuxfMtJAyN9uftsIge3eVYoNDA_dK |
| username      | username for that user (e.g. `fake-user@example.org`) |
| password      | and the password for that user (e.g `fakeUser5000!`)  |

**NOTE**: access tokens expire after 24 hours, and you will need to generate a new token by using the same endpoint with the values from above.
It's a good idea to keep the HTTP request in Thunderclient because you'll need it for later.
</details>

