This project is using React framwork and deploy on github page.

[github position](https://github.com/Superbil/superbil-case)

[webSite postion](case.superbil.co)

## branch

- master

  deploy compiled files on this branch

- code

  not yet compiled react code

```
**note** don't merge back to master branch
```

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## deploy on github

`$ git remote add origin https://github.com/Superbil/superbil-case.git`

### `npm run deploy`

Builds the app for production to the `build` folder.<br>

The build is minified and the filenames include the hashes.<br>

And deploy this folder on **remote origin master branch**

### Add CNAME on github

file name : CNAME

file content : case.superbil.co

### Github setting

- Change github page on master branch

setting > GitHub Pages > Source >> master branch

- Add custom domain on this repositories

setting > GitHub Pages > Custom domain >> case.superbil.co

### Setting subdomain

[Using a custom domain with GitHub Pages](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages)
