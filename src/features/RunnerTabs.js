import { Tabs } from 'antd';
import Runner from './runner/Runner';
import RunnerStatistic from './runner/RunnerStatistic';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const RunnerTabs = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="나의 활동" key="1">
      <RunnerStatistic/>
    </TabPane>
    <TabPane tab="러너 캘린더" key="2">
      <Runner />
    </TabPane>
  </Tabs>
);

export default RunnerTabs;