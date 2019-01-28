---
title: "An interplanetary database"
date: 2019-01-20T06:00:00-08:00
---

I've been reading recently about IPN which stands for InterPlaNet. It is a networking protocol developed specifically to correct some shortcomings of the Internet Protocol (IP). IPN is supported by NASA.

If you're Mark Watney stranded on Mars, it could take 40 minutes (???) to get a message from Mars to Earth. Mark may have fun growing potatoes in Martian soil but if it were me up there, I'd be annoyed if I couldn't get my latest article peer-reviewed because of the long communication delays.

Imagine if you had an application on your Mars-issue tablet where you could collaborate with others - such as review, annotate, highlight, and comment on articles. If you had a half-dozen people edit the article text and one of them was editing a 40-minute old version, you might run into problems synchronizing everyone's edits.

Especially if a wind storm hits on Mars all of a sudden and one of the editors has to go disconnected for an extended period of time. But you'd still want to continue writing and editing text. What else is there to do? Other than grow potatoes.

What you end up with is a series of data islands. Everyone has a different copy and a different version history. How do you reconcile them all?

Suppose each person kept a paper journal. In that journal, they would write down every modification they made to the article. Because they're attentive to detail, they note when the change happened and the context of the change.

Here's an example:

I started at 12:00pm Martian Standard Time with the following text:
Hello, Earth. I've missed you.

12:01pm Martian Standard Time
I changed "Hello, Earth." to "Hello, Mars!".

12:05pm Martian Standard Time
Immediately after sentence "Hello, Mars!", I added this sentence: "I'm back!".

12:10pm Martian Standard Time
I changed "I'm back!" to "Have you missed me? I'm back!".

On Earth, meanwhile, an editor crosses out "I've missed you" with a red pen at 12:07 Martian Standard Time but doesn't see any of Mark's changes - because of the 40 minute delay.

So 40 minutes later, when Mark's changes come in, how do we get them merged in?

Because all of the changes come in chronologically, the server can apply the changes in order one after another to recreate an up-to-date version. The final version ends being:

> Hello, Mars! Have you missed me? I'm back!



Every summer I spend some time at a family cottage a couple hours out of town. It's a nice quiet place. Great for summer fun, swimming in the lake, and relaxing by a firepit. Unfortunately, we're not the only ones who visit that area to get out of the city. Weekends are extremely busy. There is one traffic light intersection that every once in a while causes a 10-mile line up of cars. I'm not exaggarting. One time it took us a couple hours to get through this one intersection.

It turns out that the city noticed this as well. One day an engineering crew showed up at this intersection. They posted a person to sit there, every day, all day and collect notes on what was happening. This person had a paper journal and a pen. In the journal they would write entries like this:




In my [previous post](https://tips.persistr.com/articles/2019/01/there-are-stories-hidden-in-data/) I talked about how collecting and analyzing data can provide opportunities for positive change in our personal lives and in our work.

This time, I have a story to tell.

This story is about a girl named Juniper. Before I go on, I want to say that this story has a happy ending. Juniper is real. She was born premature, far too early. Her parents ended up writing a book about the experience, titled "Juniper". Here is a brief excerpt from the book's description:

> Juniper French was born four months early, at 23 weeks' gestation. She weighed 1 pound, 4 ounces, and her twiggy body was the length of a Barbie doll. Her head was smaller than a tennis ball, her skin was nearly translucent, and through her chest you could see her flickering heart. Babies like Juniper, born at the edge of viability, trigger the question: Which is the greater act of love -- to save her, or to let her go?

To Juniper's parents, the answer to that question was obvious. They wanted to save her life.

To doctors, hospital administrators, and insurance providers - the answer was less certain. Survival rates of babies born at 23 weeks is estimated at roughly 25%. Only one in four make it. They are also at a higher risk for developmental disabilities.

There was also the issue of cost. A single baby born earlier than 28 weeks gestation might need upwards of $200,000 in medical care by age seven. Juniper's care cost more than $6,000 a day.

This is where Juniper's story of survival met the reality of money. Fortunately for Juniper, it all worked out. But what if the circumstances were different, what if money was an insurmountable obstacle - would it be right to give up on a nascent life because of money?

Money is a very real practical consideration for many.

What if there was something that could be done to lower the costs of caring for premature babies? Lowering costs is not only a cost-saving measure for the hospital. It also means that we can change where we draw the line for which babies are worth saving and which ones aren't. If cost is a significant factor in that calculation, lower costs means more babies may be given a fighting chance of surviving.

This is where data enters the picture.

As it turns out, premature babies are connected to all sorts of monitoring devices and equipment that produce a ton of data over time. Here is how one medical center put that data to good use:

> Having collected ten years of [premature infants'] data, Universitair Medisch Centrum (UMC) Utrecht [...] developed a smart algorithm [...] that can support or deny the suspicion of an infection in premature babies, such as sepsis (blood poisoning).

Why use a smart algorithm?

> The model that was developed has an accuracy of ninety percent in forecasting the presence of the bacteria that causes sepsis. This is significantly higher than when doctors make predictions [in which case] the accuracy is forty percent.

Wow! More than twice the accuracy of doctors.

And why does that matter? Because it comes back to money. When doctors are not sure if a baby has an infection, they tend to err on the side of caution and administer antibiotics. The treatment has a cost associated with it. Further, babies with an active infection have to stay in the hospital longer.

> Sixty percent of babies were treated unnecessarily with antibiotics

We're talking about costs of antibiotics plus thousands of dollars per day for every extra day that a baby is at the hospital. It's a case of data and algorithms used to save lives by reducing costs.

Now, we don't all have stakes as high as this where lives are on the line. Yet we can still all benefit from meaningful improvements brought about through smart application of data retention and analysis. Better products, more satisfied customers, fewer defects, higher quality services, ...

Talking about data retention and analysis, notice one important aspect of this story.

> Having collected ten years of data ...

They had collected, stored, and analyzed 10 years of data. That's likely billions or trillions of data points. How do you even store that much data, let alone analyze it all?

This is what event-sourcing is designed to help with. I'll talk more about how we can achieve this in future posts.
