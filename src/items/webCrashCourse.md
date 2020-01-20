# Welcome to Web

## Table of Contents
- [Intro to Web Tech & Terminology](#intro)
- [The DOM](#dom)
- [CSS Layouts](#css)
- [JavaScript Tricks](#js)

## Intro to Web Tech & Terminology <a name="intro"></a>
Building a website might seem intimidating at first, there are a couple distinct pieces of technology you'll need to understand. But don't worry you don't need to understand everything to get started. The most important thing to remember is terminology. If you know what things are called, you can use Google to find the answers to many of the common problems you'll run into.

There are three distinct pieces to a basic webpage. The HTML, CSS, and JS. Though each piece serves a distinct purpose, often the same goal can be accomplished in many ways.

HTML defines the structure and the data of the webpage. The atomic unit in HTML is the **element**. 

<div class="math"><p>
\[
  \overbrace{
    \overbrace{
      \color{BrickRed}\textrm{&lt;p }
      \color{Magenta}
      \underbrace{
        \textrm{class}
      }_{\textrm{Attribute}\atop\textrm{Name}}
      \textrm{=&quot;}
      \underbrace{
        \textrm{paragraph}
      }_{\textrm{Attribute}\atop\textrm{Value}}
      \textrm{&quot;}
      \color{BrickRed}\textrm{&gt;}
    }^\textrm{Start Tag}
    \overbrace{
      \color{Green}\textrm{This is a paragraph.}
    }^\textrm{Content}
    \overbrace{
      \color{BrickRed}\textrm{&lt;/p&gt;}
    }^\textrm{End Tag}
  }^\textrm{Element}
\]</p></div>

<p></p>

As we can see the element has a type, attributes, and children. There are many types of html elements, but there are a few that are much more common than the rest. A good way to remember the types is to know the abbreviations. For example, see some common ones in the table below.

| HTML Element | What it means |
| --- | --- |
| p | Paragraph, used for block of text |
| button | The button element |
| hr | Horizontal rule |
| h1, h2, … | Header 1, Header 2, …; Shrinks as the number increases |
| div & span | used to organize your html |

So how do we actually use these elements?

<p class="codepen" data-height="308" data-theme-id="default" data-default-tab="html,result" data-user="samcarlinone" data-slug-hash="BayqdwG" style="height: 308px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Tags Demo">
  <span>See the Pen <a href="https://codepen.io/samcarlinone/pen/BayqdwG">
  HTML Tags Demo</a> by samcarlinone (<a href="https://codepen.io/samcarlinone">@samcarlinone</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>