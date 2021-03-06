# Dr. Molly Simon's Research Group Website
## Tools and Frameworks
* [Hugo](https://gohugo.io/) - static site builder
* [Netlify CMS](https://www.netlifycms.org/) - content management

## Making Changes
### Deployment
Any changes to the master branch will automatically trigger a build and deploy in Netlify.

### Content Page Configuration
Each content page on the site has its own folder and index file in the `/content` folder where the raw page content lives. In the content page's `index.md` file, `type` should be set to `pages`, and the layout should match the name of the page's layout file in `/layouts/pages/`. For example, the About page's content file is `/content/about/index.md`, and has the following configuration:
```
type: pages
layout: about
```
Any additional content pages added to the site should match this pattern.

## Design
### Text Highlights
To make a word or phrase show up in gold on the site, make that word/phrase bold in the CMS. Note that this is not enabled for most section titles.

### Icons
Icons used:
* [Space and Planets icon set](https://www.iconfinder.com/iconsets/space-and-planets)
* [Font Awesome icons](https://fontawesome.com/)

When adding additional icons, the `stroke` and `stroke-width` property may need to be altered directly within the svg file in order to change the color and stroke width.
