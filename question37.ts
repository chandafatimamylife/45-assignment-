// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function makeShirt(size : string ,text :string = 'I love typescript') :void{
    console.log(`You order a ${size} shirt that says ${text}`)
}
makeShirt('large')

makeShirt('medium')

makeShirt('small','I need a big makeShirt.')