import { Select } from 'antd';

const { Option } = Select;
function TableSelect(props) {
    const { show = true, data = [], onChange: handleChange, defaultValue } = props;
    const getOpts = (category) => {
        return category.map((item, i) => {
            const { name, value } = item;
            return (<Option key={i} value={value}>{name}</Option>);
        });
    };
    const _Select = (
        <Select
            showSearch
            style={{ width: 200, padding: "0 0 5px 10px" }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={handleChange}
            defaultValue={defaultValue}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
            {getOpts(data)}
        </Select>
    );
    return (show ? _Select : <div />);
}
export default TableSelect;