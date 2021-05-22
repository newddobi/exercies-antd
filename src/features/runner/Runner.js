import React, { useState } from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { Button, Badge } from "antd";
import SaveRecord from "./SaveRecord";
import AddRunningDay from "./AddRunningDay";

const Runner = () => {
    const [isSaveRecord, setIsSaveRecord] = useState(false);
    const [isAddRunnigDay, setIsAddRunnigDay] = useState(false);
    const runningList = useSelector((state) => state.runner.exampleList);

    const showSaveRecord = () => {
        setIsSaveRecord(true);
    };

    const handleSaveRecordOk = () => {
        setIsSaveRecord(false);
    };

    const handleSaveRecordCancel = () => {
        setIsSaveRecord(false);
    };

    const showAddRunnigDay = () => {
        setIsAddRunnigDay(true);
    };

    const handleAddRunnigDayOk = () => {
        setIsAddRunnigDay(false);
    };

    const handleAddRunnigDayCancel = () => {
        setIsAddRunnigDay(false);
    };

    // 달력 선택 이벤트
    const onPanelChange = (value, mode) => {
        console.log(value.format("YYYY-MM-DD"), mode);
    };

    const getListData = (value) => {
        let listData = [];
        let calendarMonth = "0" + (value.month() + 1);
        let calendarDate = "0" + value.date();
        // "00" 양식으로 변경
        calendarMonth = calendarMonth.slice(-2);
        calendarDate = calendarDate.slice(-2);

        runningList.forEach((running) => {
            let splitedDate = running.completeDate.split("-");
            if (
                splitedDate[1] === calendarMonth &&
                splitedDate[2] === calendarDate
            ) {
                listData.push(running);
            }
        });
        return listData || [];
    };

    // 일 목록 이벤트(각 월의 일자횟수만큼 발생)
    const dateCellRender = (value) => {
        const listData = getListData(value);

        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={index}>
                        <Badge status={item.type} text={item.title} />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h1>달리기 매니저</h1>
            <Calendar
                dateCellRender={dateCellRender}
                onPanelChange={onPanelChange}
            />
            <Button type="primary" onClick={showSaveRecord}>
                기록등록
            </Button>
            <Button type="primary" onClick={showAddRunnigDay}>
                달리기 일정 등록
            </Button>
            <SaveRecord
                isSaveRecord={isSaveRecord}
                handleSaveRecordOk={handleSaveRecordOk}
                handleSaveRecordCancel={handleSaveRecordCancel}
            />
            <AddRunningDay
                isAddRunnigDay={isAddRunnigDay}
                handleAddRunnigDayOk={handleAddRunnigDayOk}
                handleAddRunnigDayCancel={handleAddRunnigDayCancel}
            />
        </div>
    );
};

export default Runner;
