import { Table } from 'antd'

function lab2() {
    const colums = [
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" },
        { title: "Major", dataIndex: "major" },
    ]
    const data = [
        { key: 1, name: "John", age: 25, major: "IT" },
        { key: 2, name: "anna", age: 30, major: "TKDH" },
        { key: 3, name: "jack", age: 31, major: "maketting" },
    ]
    return (
        <div>
            <Table columns={colums} dataSource={data}></Table>
        </div>
    )
}

export default lab2