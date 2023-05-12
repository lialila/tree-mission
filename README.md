# Tree Mission

This is a React component that can be used to create a homepage with two sections: the left section contains a mission statement and a call-to-action button, and the right section contains three cards that highlight different aspects of the mission. The component uses Next.js for server-side rendering and styling is done using SCSS.

## Tech Stack

- Next.js (v13)
- SCSS
- TypeScript
- JavaScript
- Jest (testing)
- Playwright (testing)

## Setup instructions

1. Clone the project on your local machine (run each line individually):

´´´git clone <url>
cd <repo name>
´´´

2. Install the dependencies:
   ´´´
   pnpm install´´´

3. Start the development server:
   ´´´
   pnpm dev´´´

This will start the Next.js development server and the app will be available at http://localhost:3000.

4. To run the tests:

´´´pnpm jest
´´´

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

- The image is on the left side of the text
  ![Screenshot 2023-05-04 233226_iphone12black_portrait](https://user-images.githubusercontent.com/116379561/236417996-ec2d4175-1aee-41c1-b8a2-443efdfbe7ed.png)

- The image is on the top of the text
  ![Screenshot 2023-05-05 003016_iphone12black_portrait](https://user-images.githubusercontent.com/116379561/236348222-28a22869-0bd2-471b-8248-79692d82ec25.png)
  ![Screenshot 2023-05-05 003053_iphone12black_portrait](https://user-images.githubusercontent.com/116379561/236348243-760ecfa9-c4cc-40f3-a644-20ad72569ffc.png)

## Example

Here is an example of how to use this component in a Next.js project:

````

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

![Screenshot 2023-05-04 233315_ipadmini_spacegrey_portrait](https://user-images.githubusercontent.com/116379561/236337956-5893cc71-f2dd-4ef5-9706-de928a309b43.png)
![Screenshot 2023-05-04 233348_macbookpro13_front](https://user-images.githubusercontent.com/116379561/236338117-0fde7972-a46c-4c8b-832b-ae47f158cc93.png)
````
