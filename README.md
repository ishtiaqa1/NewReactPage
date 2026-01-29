Welcome to my Portfolio's GitHub!

Deployment: https://ishtiaqakanda.dev/

Marcy Reflection Questions:

1. Technical Concept Mastery

One technical concept I developed greater mastery over in this project was React’s component-based architecture and how UI is driven by data and props rather than direct DOM manipulation.

My mental model of this concept is that each component is a self-contained, reusable unit that receives data through props and renders UI based on that data. Instead of manually updating the DOM, I think in terms of how changes in data or state should automatically cause React to re-render the correct parts of the interface. This helps keep the UI predictable and easier to maintain as the application grows.

I applied this concept by breaking my portfolio into separate components such as the Projects section, where each project is rendered consistently using the same layout structure. The Projects component receives assets and renders multiple project cards using the same JSX structure, ensuring a consistent UI and making it easy to add or modify projects without rewriting layout logic.

2. Challenging Requirement

One project requirement I found challenging and am proud of implementing was creating a responsive project grid where all project cards and images remain visually consistent across different screen sizes.

This was challenging because each project image had different original dimensions and each project description had different text lengths, which caused inconsistent card heights and misaligned layouts. Initially, this resulted in an unpolished and uneven UI.

To solve this, I structured each project card using a combination of CSS Grid and Flexbox. The grid handles the overall layout of cards, while each card uses Flexbox to vertically stack the image, description, and link. I used a responsive aspect-ratio container for images along with object-fit: cover so that all images maintain a consistent proportion without stretching. I also used flex-grow on the description to ensure that action links align consistently at the bottom of each card.

This approach allowed the layout to remain fully responsive while keeping all cards visually uniform, improving both usability and visual polish.

3. Leveraging AI

I leveraged AI as a development assistant to help debug layout issues, explore best practices for responsive design in React, and refine my CSS architecture. Specifically, I used AI to help reason through different approaches for creating equal-height, responsive cards using CSS Grid, Flexbox, and aspect-ratio instead of fixed heights.

AI was also useful for helping me quickly iterate on solutions, validate my mental model of how CSS layout systems interact, and suggest cleaner, more maintainable patterns. Rather than copying solutions blindly, I used AI to understand why certain approaches worked and then adapted them to fit my project’s specific structure and goals.

This project provided me an opportunity to build something with AI assistance. Check out my [AI Usage Document](https://docs.google.com/document/d/1jofthkc2EaynfLV923TAfzOKE57yJ4UFOfE3c7AcFLo/edit?usp=sharing) to see how I used AI on this project.

