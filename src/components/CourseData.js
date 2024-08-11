import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

function CourseData() {
  const course = [
    {
      chapterName: 'Chapter 1: Course Introduction',
      sessions: [
        {
          sessionName: 'Welcome to the Course',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Course Outline and Projects',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'What Is JavaScript?',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Tools and Setup', completed: true, length: '5m 19s' },
        {
          sessionName: 'Running JavaScript in the Browser',
          completed: true,
          length: '5m 19s',
        },
      ],
    },
    {
      chapterName: 'Chapter 2: Variables, Data Types, Methods, and More',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'The Sandbox Files', completed: true, length: '5m 19s' },
        { sessionName: 'Using the Console', completed: true, length: '5m 19s' },
        {
          sessionName: 'Comments and Shortcuts',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Variables and Constants',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Data Types', completed: true, length: '5m 19s' },
        {
          sessionName: 'Primitive Versus Reference Types',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Type Conversion', completed: true, length: '5m 19s' },
        { sessionName: 'Operators', completed: true, length: '5m 19s' },
        { sessionName: 'Type Coercion', completed: true, length: '5m 19s' },
        {
          sessionName: 'Working with Strings',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Capitalize Challenge',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Working with Numbers',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'The Math Object', completed: true, length: '5m 19s' },
        { sessionName: 'Number Challenge', completed: true, length: '5m 19s' },
        { sessionName: 'Dates and Times', completed: true, length: '5m 19s' },
        {
          sessionName: 'Date Methods and DateTimeFormat API',
          completed: true,
          length: '5m 19s',
        },
      ],
    },
    {
      chapterName: 'Chapter 3: Arrays and Objects',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Creating Arrays', completed: true, length: '5m 19s' },
        {
          sessionName: 'Basic Array Methods',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Nesting, Concat and the Spread Operator',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Array Challenges', completed: true, length: '5m 19s' },
        { sessionName: 'Object Literals', completed: true, length: '5m 19s' },
        {
          sessionName: 'Object Spread Operator and Methods',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Destructuring and Naming',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'JSON Introduction', completed: true, length: '5m 19s' },
        { sessionName: 'Object Challenges', completed: true, length: '5m 19s' },
      ],
    },
    {
      chapterName: 'Chapter 4: Functions, Scope, and Execution Context',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Creating a Function',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'More on Arguments and Parameters',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Global and Function Scope',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Block Scope', completed: true, length: '5m 19s' },
        { sessionName: 'Nested Scope', completed: true, length: '5m 19s' },
        {
          sessionName: 'Declaration Versus Expression',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Arrow Functions', completed: true, length: '5m 19s' },
        {
          sessionName: 'Immediately Invoked Function Expressions (IIFE)',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Function Challenges',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Execution Context', completed: true, length: '5m 19s' },
        {
          sessionName: 'Execution Context in Action',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'The Call Stack', completed: true, length: '5m 19s' },
      ],
    },
    {
      chapterName: 'Chapter 5: Logic and Control Flow',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'If Statements', completed: true, length: '5m 19s' },
        {
          sessionName: 'Else-If and Nesting',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Switches', completed: true, length: '5m 19s' },
        {
          sessionName: 'Calculator Challenge',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Truthy and Falsy', completed: true, length: '5m 19s' },
        { sessionName: 'Logical Operators', completed: true, length: '5m 19s' },
        {
          sessionName: 'Logical Assignment',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Ternary Operator', completed: true, length: '5m 19s' },
      ],
    },
    {
      chapterName: 'Chapter 6: Loops, Iteration, and High-Order Array Methods',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'For Loop', completed: true, length: '5m 19s' },
        {
          sessionName: 'Break and Continue',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'While and Do While Loops',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'FizzBuzz Challenge',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'For...of Loop', completed: true, length: '5m 19s' },
        { sessionName: 'For...in Loop', completed: true, length: '5m 19s' },
        {
          sessionName: 'Array.forEach Method',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Array.filter Method',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Array.map Method', completed: true, length: '5m 19s' },
        {
          sessionName: 'Array.reduce Method',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Array Method Challenges',
          completed: true,
          length: '5m 19s',
        },
      ],
    },
    {
      chapterName: 'Chapter 7: DOM Manipulation',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Introduction to the DOM',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Document Element Properties',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'DOM Selectors - Single Elements',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'DOM Selectors - Multiple Elements',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Traversing the DOM - Elements',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Traversing the DOM - All Nodes',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Create and Append Elements',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'InnerHTML Versus createElement()',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Refactor to Multiple Functions',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Insert Elements, Text, and HTML',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Custom insertAfter() Challenge',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Replace Elements', completed: true, length: '5m 19s' },
        { sessionName: 'Remove Elements', completed: true, length: '5m 19s' },
        {
          sessionName: 'Manipulating Styles and Classes',
          completed: true,
          length: '5m 19s',
        },
      ],
    },
    {
      chapterName: 'Chapter 8: Events',
      sessions: [
        {
          sessionName: 'Section Introduction',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Event Listeners', completed: true, length: '5m 19s' },
        { sessionName: 'Mouse Events', completed: true, length: '5m 19s' },
        { sessionName: 'The Event Object', completed: true, length: '5m 19s' },
        {
          sessionName: 'Keyboard Events and Key Properties',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'KeyCode Mini-Project',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Input Events', completed: true, length: '5m 19s' },
        {
          sessionName: 'Form Submission and FormData Object',
          completed: true,
          length: '5m 19s',
        },
        { sessionName: 'Event Bubbling', completed: true, length: '5m 19s' },
        {
          sessionName: 'Event Delegation and Multiple Events',
          completed: true,
          length: '5m 19s',
        },
        {
          sessionName: 'Page Loading and Window Events',
          completed: true,
          length: '5m 19s',
        },
      ],
    },
  ];

  function handleClick(text) {
    console.log(text);

    const synth = window.speechSynthesis;
    let a = 'Hello everybody!!!!';
    const utterThis = new SpeechSynthesisUtterance(text);

    synth.speak(utterThis);
  }
  const chapterDivs = course.map((chapter, index) => (
    <div key={index}>
      <div className='card m-3'>
        <div className='card-body'>
          <div className='card-title fw-bold'>{chapter.chapterName}</div>
          <div className='card-text'>
            <ul className='list-group'>
              {chapter.sessions.map((session, index) => (
                <li
                  key={index}
                  className='list-group-item d-flex justify-content-between align-items-center'
                >
                  {session.sessionName}
                  {/* <span class='badge bg-primary rounded-pill'>14</span> */}
                  <FontAwesomeIcon
                    icon={faHeadphones}
                    onClick={() => handleClick(session.sessionName)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div>{chapterDivs}</div>
    </>
  );
}

export default CourseData;
