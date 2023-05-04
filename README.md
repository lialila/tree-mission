# Tree Mission

This is a React component that can be used to create a homepage with two sections: the left section contains a mission statement and a call-to-action button, and the right section contains three cards that highlight different aspects of the mission. The component uses Next.js for server-side rendering and styling is done using SCSS.

## Usage

To use this component, you will need to have Next.js installed in your project. Follow these steps to use the component:

1. Copy the code for the component into a new file in your Next.js project.

2. Import the component in your page file.

```
import Home from '../components/Home';
```

3. Use the component in your JSX.

```
<Home />
```

## Styling

This component uses SCSS for styling. The styling is divided into three parts: shared styles, section-specific styles and media queries.

### Shared styles

The shared styles are located at the top of the SCSS file and are used throughout the component.

### Left section styles

The left section styles are nested inside the .left class and are used to style the left section of the component.

### Cards section styles

The cards section styles are used to style the three cards in the right section of the component. The styles for the cards are located inside the .card class.

### Media query section styles

The component is responsive for mobile, tablet, and desktop. Additionally, the cards section has two options for styling in the mobile query.

## Dependencies

This component uses the following dependencies:

- Next.js
- SCSS

## Example

Here is an example of how to use this component in a Next.js project:

```
import Home from '../components/Home';

export default function HomePage() {
return (
<div>
<Home />
</div>
);
}
```

## Visuals

![Alt text](../../Documents/Tech%20applying%20docs/Tree.ly%20Coding%20challenge/Screenshot%202023-05-04%20233226_iphone12black_portrait.png)
![Alt text](../../Documents/Tech%20applying%20docs/Tree.ly%20Coding%20challenge/Screenshot%202023-05-04%20233315_ipadmini_spacegrey_portrait.png)
![Alt text](../../../../Screenshot%202023-05-04%20233348_macbookpro13_front.png)
