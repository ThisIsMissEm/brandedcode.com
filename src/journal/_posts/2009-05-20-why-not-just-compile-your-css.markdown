---
layout: post
title: Why Not Just Compile Your CSS?
---

If you&#8217;ve been following topics on front-end web development or more specifically the advent of CSS3, you may have seen loads of talk about [CSS variables](http://disruptive-innovations.com/zoo/cssvariables/), why we need them and why [we don&#8217;t](http://http://meiert.com/en/blog/20090401/why-css-needs-no-variables/). The specification on CSS variables seems pretty dry, but from what I can gather, variables in CSS are just like variables in any other programming language, they allow you to define a value once, and then reuse it later.

So, because we all know how quick browser manufactures are at making and implementing new features, some people have decided to implement this feature in various ways, including using php or your favourite server-side language to parse the file. Others have just setup campaigns and [polls](http://twitter.com/stanton/status/1564023785) as to whether we should have them, while the majority of people have just continued rolling by.

An example of css variables could be as follows:
		@variables { elementcolor: black; }
		#selector1 { color: var(elementcolor); }
		#selector2 { background: var(elementcolor); }

Versus:
		#selector1 { color: black; }
		#selector2 { background: black; }

Why not just compile your CSS while you&#8217;re at it? This method could have numerous advantages over having variables on the client. It could, if we wanted do many more things then just add variables, like adding compression amongst other things.

I&#8217;ve already used a form of a CSS Compiler when working over at NapalmRiot.com, although the user would probably never see it, it was a simple php script to find all @imports in a css file, call in the files, and remove the import rules, hence having slightly improved loading performance.

This had a downfall though, whenever I made a single change, I had to recompile my css. Now instead of compiling @imports, now compile variables, what advantage do you get?

The arguments:

* “*How Quick is it to do a find and replace in your text-editor of choice to replace a colour?*”
* “*How often do you change all the colours in your css file, or something of the similar nature?*”
* “*Is it just a matter of not remembering Hex Codes?*”

Really, I think instead of debating whether the developer needs CSS Variables, we should be asking: “*Does the **user** need css variables?*”. It&#8217;s not about what makes the developers life easier, it&#8217;s about what makes the *users* life easier.