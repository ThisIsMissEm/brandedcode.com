---
layout: post
title: CSS Frameworks, &amp; Why I use them
---

I&#8217;m sure anyone, who has ever down any hardcore web development or developed a web application will know that after you reach a certain size, your CSS files start to get unwieldy — That is, they become hard to edit, cumbersome to make bug fixes to, and sometimes start taking a month of Fridays to load.

A Common solution to this is to use CSS Indexing, where you set up a system of comments to be able to quickly find your way around your files. While this method of having Comment Headings for each section works, it still leaves you with a massive file size.

Another solution is to go the way of a Framework, where by you break each part in your css down to it&#8217;s core components. A list of the core components may look quite similar to the following:

* reset.css &mdash; Yes, I use a reset stylesheet, simple because it makes it easier to develop styles consistently across browsers.
* typography.css &mdash; This includes everything to do with type. From the Baseline and Line-height settings, right through to font-sizes and image alignment.
* grid.css &mdash; A standard style grid systems. Typically including CSS for doing column layouts and table grids.
* importer.css &mdash; One file to @import in all your CSS files, alternatively you can just link in each of your stylesheets using the &lt;link&gt; tag in HTML.

From that basic layout of files, I then use a I trick call &#8220;Body Identification&#8221;, this is simply the method of applying a unique ID to each type of page in your site. e.g. If your &#8216;about us&#8217; page needs a red background, then I&#8217;d use this selector to apply the CSS rule.

With using a unique page ID, it&#8217;s probably a good practice to put all the CSS files named by their unique ID&#8217;s in a folder called &#8216;pages&#8217; or &#8216;layouts&#8217;. You&#8217;re file structure is now looking much more like this:
	
	.
	|-- grid.css
	|-- reset.css
	|-- typography.css
	|-- layouts
	|   |-- aboutus.css
	|   |-- frontpage.css
	|   `-- blog.css
	`-- importer.css

So there you have it, a simple way to manage your css, with the benefits of being in small chunked files, having an abstracted framework to work around — a Scaffold, if you will — and, you also have highly specific stylesheets targeting individual pages of your application.

You can Learn more about CSS Frameworks at:

* Alistapart: Issue #239: [Framework For Designers](http://www.alistapart.com/articles/frameworksfordesigners)
* Monday By Noon: [Please Do Not Use CSS Frameworks](http://mondaybynoon.com/2007/08/27/please-do-not-use-css-frameworks/)
* Smashing Magazine: [CSS Frameworks + CSS Reset: Design From Scratch](http://www.smashingmagazine.com/2007/09/21/css-frameworks-css-reset-design-from-scratch/)
* Wikipedia: [CSS Frameworks](http://en.wikipedia.org/wiki/CSS_framework)

What&#8217;s your own take on the Use of CSS Framworks and They&#8217;re Applications?