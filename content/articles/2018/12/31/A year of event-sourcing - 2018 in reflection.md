---
title: "A year of event-sourcing - 2018 in reflection"
date: 2018-12-31T09:14:29-08:00
---

I've been using event-sourcing architectures for about a decade and yet I always find it more difficult than it should be to set up an event-sourcing infrastructure for a new project. After years of frustration with (un)available tools for event-sourcing, in 2017 I decided to make a go at making event-sourcing more accessible to small teams.

I started building out a cloud-based, fully managed, event-sourcing platform that would be easy to use, easy to learn, and easy to maintain. I called it Persistr, because it persists data forever. 

2018 turned out to be a real marquee year for Persistr. Here are some highlights:

- Persistr platform was launched into production. However, we're limiting its use to customers by invite-only, while we continue working on scaling it out.

- Launched our very own fully-automated [Persistr Status Page](https://status.persistr.com/), providing real-time API latency metrics and incident reports.

- Stabilized and launched the Persistr REST API.

- Launched Persistr CLI, the command-line interface for managing Persistr databases. The CLI accomplishes my vision for easy do-it-yourself provisioning of databases. It also provides convenient stream inspection, historical and real-time, useful for debugging.

- Launched [Persistr Docs](https://docs.persistr.com/), our online documentation platform. Currently, it provides documentation for Persistr CLI.

- Similarly, launched the Persistr JavaScript libraries for Node.js and web browsers. I am particularly happy with how these turned out, as they make event-sourcing incredibly easy.

- Launched Persistr Console, a web application to visually browse events stored in your database.

- Introduced an early preview of Persistr Domain Model, a way to define your data models without writing code.

Looking forward to an equally great 2019.

Happy New Year!
