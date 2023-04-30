## Concepts

### CLS(Cumulative Layout Shifting)

CLS is bad for SEO's, google or any other search engine prefers the website that has very less CLS over websites in which a lot cumulative layout shifting is involved.

So, in this project also when we added the alert each time new alert appears it shifts
whole layoout website downwards which results in bad User Experience so we have removed it
by associating the alert component's div or container with a specified height. So, whether
it is present on screen or not it does not matter, becuase it will consume that much space
on screen and thus shifting occurs, when alert appears.

### Publish React App on github

In order to publish website on githubpages we need to take help of gh-pages package

```
npm i gh-pages
```

Then add homepage in package.json file

```
"homepage": "https://{username}.github.io/{repository_name}/"
```

use exact and same spellings of username and repository_name whatever you have
in order to avoid errors

Then add two scripts in package.json file

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Then finally run

```
npm run deploy
```

It will deploy your react app on github pages.
To get the published URL,

- Go to your GitHub Repo.
- Click Settings menu.
- Go to the "Pages" Section.
- You can see the "Your site is published" message.
- Select branch to "gh-pages" and click on the "Save" button.

### NOTE

If you are using react-router-dom that is your consists of multiple routes then react-app
on githib pages may not respond correctly for this you have to use Client Side Rendering.
Or use Heroku for deployment purpose.
