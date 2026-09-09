# Add the About Us feature card

## What will change
- Convert the supplied yoga-class photo from PNG to a real, optimized WebP file committed under the project assets.
- Add one wide, centered About Us card immediately below the homepage hero.
- Keep the image across the card’s upper section with rounded top corners and a stable crop across screen sizes.
- Build the lower section in deep navy with the supplied white headline and body copy.
- Shape the lower-right edge around a white pill-shaped “Join the Community” link with a diagonal arrow.
- Link the call-to-action to the existing Contact page.

## Visual and responsive behavior
- Preserve the existing homepage hero and floating navigation.
- Use the project’s design tokens for the navy, white, and supporting colors.
- Keep the card readable on phones by stacking the call-to-action beneath the copy while retaining the sculpted corner treatment on larger screens.
- Add restrained entrance and button motion, with reduced-motion support.

## Technical details
- Update `src/routes/index.tsx` for the new section and semantic content structure.
- Update `src/styles.css` with semantic About card tokens and the custom lower-corner shape.
- Store the uploaded image as an actual `.webp` binary, not an asset metadata pointer.
- Verify the production build and inspect the result at desktop and mobile sizes.
