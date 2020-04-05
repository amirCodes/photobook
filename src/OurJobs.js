import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import './style.css';
import { Table, Button } from 'antd';

const data = [
  {
    key: '1',
    jobTitle: 'Software Engineer (Full Stack)',
    jobType: 'Part time',
    experience: 2,
    address: 'THE COLUMBIA TOWER, MANDALUYONG CITY, Philippines',
  },
  {
    key: '2',
    jobTitle: 'Senior Graphic Designer',
    jobType: 'Full time',
    experience: 6,
    address: 'BANGSAR SOUTH,Kaual Lumpur, Malaysia',
  },
  {
    key: '3',
    jobTitle: 'Software Engineer (Full Stack)',
    jobType: 'Full time',
    experience: 2,
    address: 'THE COLUMBIA TOWER, MANDALUYONG CITY, Philippines',
  },
  {
    key: '4',
    jobTitle: 'Head of Digital Marketing',
    jobType: 'Full time',
    experience: 4,
    address: 'avnue 3,Jakarta , Indonesia',
  },
  {
    key: '5',
    jobTitle: 'Database Engineer',
    jobType: 'Full time',
    experience: 5,
    address: 'THE COLUMBIA TOWER, MANDALUYONG CITY, Philippines',
  },
  {
    key: '6',
    jobTitle: 'Digital Marketing',
    jobType: 'Part time',
    experience: 3,
    address: 'BANGSAR SOUTH,Kaual Lumpur, Malaysia',
  },
];

class OurJobs extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'experience',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'job Title',
        dataIndex: 'jobTitle',
        render: (text, row, index) => {
          if (index < 14) {
            return <a href="https://www.photobookworldwide.com/careers">{text}</a>;
          }
          return {
            children: <a href="https://www.photobookworldwide.com/careers">{text}</a>,
            props: {
              colSpan: 15,
            },
          };
        },
        key: 'jobTitle',
        filters: [
          { text: 'Software Engineer', value: 'Software Engineer' },
          { text: 'Marketing', value: 'Marketing' },
          { text: 'Designer', value: 'Designer' }
        ],
        filteredValue: filteredInfo.jobTitle || null,
        onFilter: (value, record) => record.jobTitle.includes(value),
        sorter: (a, b) => a.jobTitle.length - b.jobTitle.length,
        sortOrder: sortedInfo.columnKey === 'jobTitle' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'job Type',
        dataIndex: 'jobType',
        key: 'jobType',
        filters: [
          { text: 'Full time', value: 'Full time' },
          { text: 'Part time', value: 'Part time' },
        ],
        filteredValue: filteredInfo.jobType || null,
        onFilter: (value, record) => record.jobType.includes(value),
        sorter: (a, b) => a.jobType.length - b.jobType.length,
        sortOrder: sortedInfo.columnKey === 'jobType' && sortedInfo.order,
        ellipsis: true,
        width: 140,
        align: 'center',
      },
      {
        title: 'Experience',
        dataIndex: 'experience',
        key: 'experience',
        sorter: (a, b) => a.experience - b.experience,
        sortOrder: sortedInfo.columnKey === 'experience' && sortedInfo.order,
        ellipsis: true,
        width: 140,
        align: 'center',
      },
      {
        title: 'Location',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'Kuala Lumpur', value: 'Kaual Lumpur' },
          { text: 'Jakarta', value: 'Jakarta' },
          { text: 'Philippines', value: 'Philippines' },
          { text: 'Malaysia', value: 'Malaysia' },
          { text: 'Indonesia', value: 'Indonesia' }

        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <div className="job-container">
        <div className="Job-text-title">
          <h2>Our Jobs</h2>
          <p> We care about our people, and we do our best to create a truly meaningful journey </p>
        </div>
        &nbsp;
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort experience</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }
}

export default OurJobs;

