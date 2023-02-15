import React from 'react';
import ListItem from './ListItem';
import "./UsefulResources.css";

const UsefulResources = ()=>{


    return(
        <div className='ures__main'>
            <h3 className='ures__header'>List of recommended resources you might be interested in</h3>
            <ListItem desc={"Color Paletts - Heavy.ai"}  link="https://www.heavy.ai/blog/12-color-palettes-for-telling-better-stories-with-your-data"/>
            <ListItem desc={"Free library of 900+ open source icons - Iconoir"}  link="https://iconoir.com/"/>
            <ListItem desc={"1307 Free SVG icons for popular brands - Simpleicons"}  link="https://simpleicons.org/"/>
            <ListItem desc={"CSS Animations On Demand - Animista"}  link="https://animista.net/"/>
            <ListItem desc={"Animations for the strong of heart, and weak of mind - Obnoxious"}  link="https://tholman.com/obnoxious/"/>
            <ListItem desc={"Unique vector assets within seconds - Heazy"}  link="https://app.heazy.studio/"/>
            <ListItem desc={"Sitemap builder - Octopus.do"}  link="https://octopus.do/"/>
            <ListItem desc={"Virtual whiteboard for sketching hand-drawn like diagrams - Excalidraw"}  link="https://excalidraw.com/"/>
            The list is being updated...
        </div>
    )

}

export default UsefulResources;