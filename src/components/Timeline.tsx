import React from "react";
import {RootState} from "../redux/store";
import TimelineItem from "./TimelineItem";
import {useSelector} from "react-redux";

const Timeline = () => {
    const timelineData = useSelector((state: RootState) => state.timelineData.timelineData);

    return timelineData.length > 0
        ? (
            <div className="timeline-container">
                <div className="timeline-item">
                    <div className="timeline-content timeline-content__title timeline-content__left">Свойство</div>

                    <div className="timeline-content timeline-content__title">Значение</div>
                </div>
                {
                    timelineData.map((field, i) => {
                        return <TimelineItem {...field} key={i}/>
                    })
                }
            </div>
        )
        : <p>Запрос.....</p>
};

export default Timeline;