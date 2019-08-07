# Prist | A Gatsby & Prismic Starter

A light-themed starter powered by [Gatsby v2](https://www.gatsbyjs.org) and [Prismic](https://prismic.io/) to showcase portfolios and blogs.

![gatsby-prismic-starter-prist-preview](https://user-images.githubusercontent.com/5288685/60453158-5e716900-9bfe-11e9-9319-b2b83738ea62.png)

### 👩‍💻 [Demo website](http://prist.marguerite.io)

## ✨ Features

- Landing page with customizable Hero, Portfolio preview, and About component.
- [Emotion](https://emotion.sh/docs/styled) styled components
- Blog layout and pages
- Portfolio layout and pages
- Google Analytics
- Mobile ready

## 🚀 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/margueriteroth/gatsby-prismic-starter-prist)

1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying this project

```sh
gatsby new YOUR-PROJECT-NAME https://github.com/margueriteroth/gatsby-prismic-starter-prist
```

2. **Start developing.**

Navigate into your new site's directory, install node modules, and start it up.

```sh
cd YOUR-PROJECT-NAME
npm install
gatsby develop
```

3. **Open the code and start customizing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._


## 👩‍🎤 Configuring Prismic

1. **Create account and repo**

Head over to [Prismic](https://prismic.io/signup) and create your new account. Once you have an account, create a new repository.

2. **Add the repo to your new project**

In your `gatsby-config.js` file, add your Prismic Repo name to the `repositoryName` field:

```
`gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'REPO-NAME', // (REQUIRED, replace with your own)
        }
    },
```
3. **Define your Custom Types**

This starter uses 3 Custom Types:
![image](https://user-images.githubusercontent.com/5288685/62646196-c01ea480-b91b-11e9-8d30-d9fbf8d1df36.png)


3a. **Homepage**

![image](https://user-images.githubusercontent.com/5288685/62645556-741f3000-b91a-11e9-9b5b-e29288a4cd92.png)

Create the following fields.

API IDs:
* uid
* hero_title
* hero_button_text
* hero_button_link
* content
* about_title
* about_bio
* about_links

Head over to Content and create a new page using the Homepage Custom Type:
![image](https://user-images.githubusercontent.com/5288685/62645767-e4c64c80-b91a-11e9-8baf-c1ead93a9b5f.png)

Remember to save and publish! Repeat for other Custom Types.

3b. **Post**

![image](https://user-images.githubusercontent.com/5288685/62645940-3b338b00-b91b-11e9-9684-9ca5b98882a7.png)
![image](https://user-images.githubusercontent.com/5288685/62645970-4d152e00-b91b-11e9-89db-b2b0ac4e26a1.png)


3c. **Project**

![image](https://user-images.githubusercontent.com/5288685/62646080-8188ea00-b91b-11e9-8f61-2227581c0ee4.png)
![image](https://user-images.githubusercontent.com/5288685/62646133-9b2a3180-b91b-11e9-9a88-c0c9eef4bbcf.png)

Utilize the endpoint playground to see that your data is in the right spot: YOUR-PRISMIC-REPO-NAME.prismic.io/api/v2
