import React, { useState } from "react";
import { Checkbox, Row, Col } from "antd"
import styles from './index.module.less'
import './index.less'

const data = [
  {
    title: "标题1",
    id: '1',
    description:
      "Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。组件一起使用，可以实现灵活的布局。组件一起使用，可以实现灵活的布局。组件一起使用，可以实现灵活的布局。",
  },
  {
    title: "标题2",
    id: '2',
    description: "联动 checkbox。",
  },
  {
    title: "标题3",
    id: '3',
    description: "在实现全选效果时，你可能会用到 indeterminate 属性。",
  },
  {
    title: "标题4",
    id: '4',
    description: "checkbox 一般用于状态标记，需要和提交操作配合。",
  },
  {
    title: "标题5",
    id: '5',
    description: "在一组可选项中进行多项选择时；",
  },
];

export default function DragSelector() {
  
  const [isOnDrag, setIsOnDrag] = useState(false)
  const [checked, setChecked] = useState([])
  const [tempChecked, setTempChecked] = useState({})

  const onChange = (val) => {
    console.log(val)
    setChecked([...checked, val])
  }

  function onMouseDown(e) {
    e.stopPropagation()
    setIsOnDrag(true)
    setTempChecked({})
  }

  function onMouseUp (e) {
    e.stopPropagation()
    setIsOnDrag(false)
    console.log(tempChecked)
  }

  function handleDragSelected(id) {
    setTempChecked({
      ...tempChecked,
      [id]: true,
    })
  }



  return (
    <Checkbox.Group
      className={styles.dragSelector} style={{ width: "100%" }}
      onChange={onChange}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      value={checked}
    >
      <Row>
        {data.map(item => {
          return (
            <Col
              key={item.id}
              span={24}
              onMouseMove={e => {
                e.stopPropagation()
                if (isOnDrag) {
                  handleDragSelected(item.id)
                }
              }}
            >
              <Checkbox 
                className={styles.checkbox}
                value={item.id}
              >
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
              </Checkbox>
            </Col>
          )
        })}
      </Row>
    </Checkbox.Group>
  )
}
