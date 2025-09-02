/*<div id='parent'>
    <div id='child'>
        <h1>I am an h1</h1>
        <h2>I am an h2</h2>
    </div>
</div>
*/


// const heading = React.createElement('h5', { id: 'h1' }, 'Testing what i learned separate');
// console.log(heading);
const h1 = React.createElement('h1', {}, 'I am a h1');
const h2 = React.createElement('h2', {}, 'I am a h2');
const child1 = React.createElement('div', { id: 'child1' }, [h1, h2]);
const child2 = React.createElement('div', { id: 'child2' }, [h1, h2]);
const parent = React.createElement('div', { id: 'parent' }, [child1, child2]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);