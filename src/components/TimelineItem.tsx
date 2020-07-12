import React, {useState} from "react";
import {IField, IList} from "../redux/types";

interface IItem {
    title: string
    text?: string
    header: boolean
    show: boolean
    setShow?: (show: boolean) => void
}

const Item = (props: IItem) => {
    const clsRight = props.header ? "timeline-content" : "timeline-content timeline-content__right";
    const title = props.header ? "timeline-content title" : "timeline-content";

    const handleClick: React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
        > = e => {
        if (props.setShow) props.setShow(!props.show);
    };

    return (
        <>
            {
                props.header && !props.show &&
                <li className="timeline-item">
                    <div className={title}>{props.title}</div>
                    <div className="timeline-content__center">
                        {props.header && <span className="timeline-content__circle" onClick={handleClick}/>}
                        {props.show && <span className={"timeline-content__line"}/>}
                    </div>
                    <div className={clsRight}>{props.text}</div>
                </li>
            }
            {
                props.show &&
                <li className="timeline-item">
                    <div className={title}>{props.title}</div>
                    <div className="timeline-content__center">
                        {props.header && <span className="timeline-content__circle" onClick={handleClick}/>}
                        {props.show && <span className={"timeline-content__line"}/>}
                    </div>
                    <div className={clsRight}>{props.text}</div>
                </li>
            }
        </>
    )
};

const TimelineItem = (props: IList) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <ul className="timeline">
            {
                props.list.map((field: IField, i: number) => {
                     if(field.header) return <Item {...field} setShow={setShow} show={show} key={i}/>
                     else return <Item {...field}  show={show} key={i}/>
               })
            }
        </ul>
    )
};

export default TimelineItem;

