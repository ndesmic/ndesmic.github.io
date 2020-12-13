---
pageTitle: Starting a New (kinda) Blog
---

I decided to start, this, my new(ish) Blog.  I say -ish because in reality I'd like it to coalesce content I've already started writing in github and dev.to.  I have a number of goals in mind with this:

- Put content into one place
- Have more control over the content
- Try some new things
- Make my web presence a little more official feeling
- Maybe monetize?
- Make a better web

## Put content into one place

Recently I found myself writing a lot more, because I have a little more time but also because I've found it to be a really good resource to look back on, espeically when I deep-dive a topic as it serves as my own documentation.  In addition I hope it can serve as documentation for others as well!  I currently have a TIL (Today I Learned) microblog that I rarely update, a blog about porting Rise of the Triad to web browsers, and a web-centric programming blog on dev.to.  It would be nice if users were aware of all the content without having to dig through my large collection of github repos.  It might also allow me to save some effort and link those other blogs together a bit.

## Have more control over content

Actually, I dread this part.  It doesn't matter if you know what you're doing, making a site is hard.  I don't really want to deal much with the design elements, hosting, certificates, domain-name registration etc.  That said, I at least have a choice now.  If I have a really cool idea I could potentially implement it or if I don't like how other sites do things I can change it.  Also, there are some topics in there that I could use a little more experience in.

## Try some new things

I have at least one short-term goal which is to write about using different free site hosting services and compare them.  I'm also using Eleventy to generate the blog and we'll see how that goes.  I'd almost build my own static site generator (technically I already built one but it's React/Preact and while popular for the mainstream I'd rather be using web-components) but that's a bit of a chore unless I feel I could really do something cool.  There's potential for doing more interactive stuff as well which means making new components and seeing how to include them.

## Make my web presence a little more official

Using github, linkedin, and dev.to is okay but similar to putting content into one place it feels like I should have a destination showcase.  Also, even though I don't want to do things like pay for a domain name it does give a little more weight to things.

## Maybe monetize

Realistically, I like to write this stuff and I'm happy that others can consume it.  But it takes work and while not terrible, hosting costs money even if it's just so others can enjoy _my_ content.  I'm lucky enough to have a day-job so I don't need it, but I also think we as a society need to change our perception that good content costs _something_.  So maybe I'll try to see if I could monetize, it might work, it might not, web users are trained to not pay for things but I think I want to _try_ and maybe write about that too.  With a site I should have more than enough control over how things work to experiment without resorting to the types of monetization I hate.

## Make a better web

Perhaps most of all it's about breaking content silos.  I feel the web now kinda sucks because everything is siloed by a handful of  sites.  I want to be able to pick my content up and move it as I see fit (in fact I intent to duplicate some content over various channels).  I think people should have their own sites, like they did back in the day that they have control over, that they can moderate how they like, that can be as crazy, whimsical or boring as they want.  Social media should be for sharing links, not content.  I cringe everytime I see a person trying to say something with even slight nuance and having to fight twitter with multiple tweets.  This is wrong and yet we accepted it. The UX and algorithms are scored on addiction not human benefit.  And I suppose I should put my money where my mouth is because if I can't nobody can.

---

In the meantime expect a lot of contruction! 

<style>
	#sign {
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 50px;
  height: 256px;
  width: 256px;
  background: #ffdf0f;
  border-radius: 10px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  transform: rotate(45deg);
}
#sign::before {
  display: block;
  content: "";
  height: 240px;
  width: 240px;
  border: 8px solid black;
  border-radius: 10px;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
#sign::after {
  content: "Under Construction";
  font-family: arial;
  font-weight: bold;
  font-size: 30px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  transform: rotate(-45deg);
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
</style>
<div id="sign"></div>