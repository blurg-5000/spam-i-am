# spam-i-am 
<img src="./public/images/hero_images/spam_classic_text.png" alt="A beautiful classic can of SPAM" style="width: 100px;"/>

### An experimental mini-multidays project in Tāmaki
#### Not sponsored by Hormel Foods Corporation (yet)

-----

Welcome to the wonderful world of SPAM! This spam-packed multidays project is designed to help you learn to work collaboratively together as a cohort on one big project. Along the way you'll consolidate your learnings from the Bootcamp curriculum, write code which emphasises quality over quantity, and be exposed to a larger and more complex codebase. 

---

### External documentation 

- [Figma wireframes](https://www.figma.com/design/vuRQXZ9V8QIMZPrJ3oKrpf/SPAM?node-id=0-1)
- [ERD Diagram](https://github.com/dev-academy-challenges/spam-i-am/blob/main/resources/ERD-diagram.png) 

---

### Getting started 

Assign roles 
<details>

  - Git Lead (at least two people sharing this role)
  - Vibes Lead
  - Scrum master (will organise and lead a standup on Friday, and the retro at the end of Friday)
  - Frontend Lead (can help to make overarching decisions on the FE)
  - Backend Lead (can help to make overarching decisions on the BE)

For any Product Owner decisions, please speak to a facilitator and consult the Figma wireframes. 
    
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
  - Commit frequently 
  - When you've finished your ticket and are ready to merge your branch into main, ensure all your latest changes are pushed up to Github and raise a pull request. Go and ask a Git Lead to take a look at your PR and help you merge it into main. We strongly recommend you all sit down together to do this.
  - Remember to close the issue associated with your ticket, and drag your ticket to 'Done' on the project board!
  - Let everyone know they need to pull from main in their branches after they finish saving and committing their own work. 
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

