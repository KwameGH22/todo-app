# DESIGN IMPLEMENTATION GUIDE

## LANDING PAGE

## ROOT COMPONENT
```Js
<div className={`min-h-screen pb-20 ${
  darkTheme
    ? 'bg-gradient-to-r from-[#9947D7] via-[#8B83F8] to-[#76A2F9]'
    : 'bg-[#F2F2F2]'
}`}>
    <div className='w-full h-52 m-auto bg-bg-desktop bg-cover bg-no-repeat'>
        {/* Content goes here */}
        <Header/>
        <Form/>
        <Card/>
    </div>
</div>
```

## ROOT COMPONENT LAYOUT 

1. Outer Container (div with dynamic background):

    - Parent: None (top-level container).
    - Children:
        - Inner Container (div with background image).

2. Inner Container (div with background image):

    - Parent: Outer Container.
    - Children:
        - Header component (Header).
        - Form component (Form).
        - Card component (Card).

3. Header Component (Header):

    - Parent: Inner Container.
    - Children: None.

4. Form Component (Form):

    - Parent: Inner Container.
    - Children: None.

5. Card Component (Card):

    - Parent: Inner Container.
    - Children: None.

## DESCRIPTION OF TAILWINDCSS CLASS UTILITIES

| Class                 | Meaning                                                                      |
|-----------------------|------------------------------------------------------------------------------|
| `min-h-screen`        | Sets the minimum height of the container to be at least the full height of the viewport. |
| `pb-20`               | Sets padding-bottom to 20 units.                                             |
| `${darkTheme ? 'bg-gradient-to-r from-[#9947D7] via-[#8B83F8] to-[#76A2F9]' : 'bg-[#F2F2F2]'}` | Dynamic background class:
  - If `darkTheme` is true, applies a gradient background from left to right with specific colors.
  - If `darkTheme` is false, sets the background color to a specific shade.            |
| `w-full`              | Sets the width to 100% of its container.                                      |
| `h-52`                | Sets the height to 52 units.                                                  |
| `m-auto`              | Centers the element horizontally.                                            |
| `bg-bg-desktop`       | Sets the background image.                                                    |
| `bg-cover`            | Ensures the background image covers the entire container.                    |
| `bg-no-repeat`        | Prevents the background image from repeating.                                 |

