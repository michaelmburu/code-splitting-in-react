import React, {useState, lazy, Suspense} from 'react';
import ErrorBoundary from '../ErrorBoundary';

//Code splitting components, wrap in suspense
const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));


// To show other components incase of error, wrap error boundary on individual componets
export const About = () => {

    const [showComponents, setShowComponents] = useState(false)

    return (
        <>
            <h1>About</h1>
            {showComponents && (
            <ErrorBoundary>
                <Suspense fallback={<p>Loading Components...</p>}>
                <One />
                <Two />
                <Three />
            </Suspense>
            </ErrorBoundary> 
            )}
            <button onClick={() => setShowComponents(true)}>Show</button>
        </>
    )
}

export default About;