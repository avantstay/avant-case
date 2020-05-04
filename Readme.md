# avant-case

A conditional rendering component to improve readability, the nomenclature is based on
[proposal pattern matching ](https://github.com/tc39/proposal-pattern-matching)

### examples:

default: 

```jsx
<Case>
    <When 
      is={} //boolean variable
      render={() => Element} // a function that returns one or multiple JSX elements
    />
    <When 
      is={} //boolean variable
      render={() => Element} // a function that returns one or multiple JSX elements
    />
</Case>
```

non exclusive: 

```jsx
<Case nonExclusive>
    ...
</Case>
```

By default, the Case component get the first truthy condition and return as fast as possible, but sometimes
we need to render more than one `When` conditions, to enable it, just add `nonExclusive` prop on `Case` component
