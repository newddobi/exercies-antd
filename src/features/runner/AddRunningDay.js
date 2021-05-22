import React from "react";
import { Modal } from 'antd';

const AddRunningDay = ({isAddRunnigDay, handleAddRunnigDayOk, handleAddRunnigDayCancel}) => {
    return (
        <div>
            <Modal
                title="러닝일정 등록"
                visible={isAddRunnigDay}
                onOk={handleAddRunnigDayOk}
                onCancel={handleAddRunnigDayCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default AddRunningDay;
