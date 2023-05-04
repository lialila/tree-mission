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

![Screenshot 2023-05-04 233226_iphone12black_portrait](https://user-images.githubusercontent.com/116379561/236337927-6236cc63-56ab-4e14-8f52-33bc9ccacb82.png)
![Screenshot 2023-05-04 233315_ipadmini_spacegrey_portrait](https://user-images.githubusercontent.com/116379561/236337956-5893cc71-f2dd-4ef5-9706-de928a309b43.png)
![Screenshot 2023-05-04 233348_macbookpro13_front](https://user-images.githubusercontent.com/116379561/236338117-0fde7972-a46c-4c8b-832b-ae47f158cc93.png)
