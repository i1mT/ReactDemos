import React from "react";
import { Checkbox, Row, Col } from "antd"
import './index.css'

const data = [
  {
    title: "标题1",
    description:
      "Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。",
  },
  {
    title: "标题2",
    description: "联动 checkbox。",
  },
  {
    title: "标题3",
    description: "在实现全选效果时，你可能会用到 indeterminate 属性。",
  },
  {
    title: "标题4",
    description: "checkbox 一般用于状态标记，需要和提交操作配合。",
  },
  {
    title: "标题5",
    description: "在一组可选项中进行多项选择时；",
  },
];

export default function DragSelector() {

  const onChange = (val) => {
    console.log(val)
  }
  return (
    <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
      <Row>
        {data.map((item, index) => {
          return (
            <Col span={24}>
              <Checkbox value={index}>
                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
              </Checkbox>
            </Col>
          )
        })}
      </Row>
    </Checkbox.Group>
  )
}
