import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import "./styles/table.css";
import { useState } from "react";

const EditableCell = ({ value, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [cellValue, setCellValue] = useState(value);

  const handleInputChange = (e) => {
    setCellValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onChange(cellValue);
      setEditing(false);
    }
  };

  return editing ? (
    <input
      type="text"
      value={cellValue}
      onChange={handleInputChange}
      onBlur={() => {
        onChange(cellValue);
        setEditing(false);
      }}
      onClick={handleKeyPress}
      autoFocus
    />
  ) : (
    <span onClick={() => setEditing(true)}>{value}</span>
  );
};

function App() {
  const initialData = [
    {
      id: "1",
      name: "Aaron Miles",
      email: "aaron@mailinator.com",
      role: "member",
    },
    {
      id: "2",
      name: "Aishwarya Naik",
      email: "aishwarya@mailinator.com",
      role: "member",
    },
    {
      id: "3",
      name: "Arvind Kumar",
      email: "arvind@mailinator.com",
      role: "admin",
    },
    {
      id: "4",
      name: "Caterina Binotto",
      email: "caterina@mailinator.com",
      role: "member",
    },
    {
      id: "5",
      name: "Chetan Kumar",
      email: "chetan@mailinator.com",
      role: "member",
    },
    {
      id: "6",
      name: "Jim McClain",
      email: "jim@mailinator.com",
      role: "member",
    },
    {
      id: "7",
      name: "Mahaveer Singh",
      email: "mahaveer@mailinator.com",
      role: "member",
    },
    {
      id: "8",
      name: "Rahul Jain",
      email: "rahul@mailinator.com",
      role: "admin",
    },
    {
      id: "9",
      name: "Rizan Khan",
      email: "rizan@mailinator.com",
      role: "member",
    },
    {
      id: "10",
      name: "Sarah Potter",
      email: "sarah@mailinator.com",
      role: "admin",
    },
    {
      id: "11",
      name: "Keshav Muddaiah",
      email: "keshav@mailinator.com",
      role: "member",
    },
    {
      id: "12",
      name: "Nita Ramesh",
      email: "nita@mailinator.com",
      role: "member",
    },
    {
      id: "13",
      name: "Julia Hunstman",
      email: "julia@mailinator.com",
      role: "member",
    },
    {
      id: "14",
      name: "Juan Alonso",
      email: "juan@mailinator.com",
      role: "admin",
    },
    {
      id: "15",
      name: "Gabriel Montoya",
      email: "gabriel@mailinator.com",
      role: "admin",
    },
    {
      id: "16",
      name: "Beatrice Iglesias",
      email: "beatrice@mailinator.com",
      role: "admin",
    },
    {
      id: "17",
      name: "Sarah Symms",
      email: "sarah.s@mailinator.com",
      role: "admin",
    },
    {
      id: "18",
      name: "Patrick Pinheiro",
      email: "patrick@mailinator.com",
      role: "admin",
    },
    {
      id: "19",
      name: "Anand Patel",
      email: "anand@mailinator.com",
      role: "member",
    },
    {
      id: "20",
      name: "Kishore Kalburgi",
      email: "kishore@mailinator.com",
      role: "member",
    },
    {
      id: "21",
      name: "Rebecca Norris",
      email: "rebecca@mailinator.com",
      role: "member",
    },
    {
      id: "22",
      name: "Özgür Başak",
      email: "ozgur@mailinator.com",
      role: "member",
    },
    {
      id: "23",
      name: "Robin Andersen",
      email: "robin@mailinator.com",
      role: "member",
    },
    {
      id: "24",
      name: "Nandini Kumar",
      email: "nandini@mailinator.com",
      role: "member",
    },
    {
      id: "25",
      name: "Nikita Smith",
      email: "nikita@mailinator.com",
      role: "member",
    },
    {
      id: "26",
      name: "Colton Doe",
      email: "colton@mailinator.com",
      role: "member",
    },
    {
      id: "27",
      name: "Alain Senna",
      email: "alain@mailinator.com",
      role: "member",
    },
    {
      id: "28",
      name: "Ashwin Jain",
      email: "ashwin@mailinator.com",
      role: "member",
    },
    {
      id: "29",
      name: "Seema Bhatt",
      email: "seema@mailinator.com",
      role: "member",
    },
    {
      id: "30",
      name: "Kayla Scarpinski",
      email: "kayla@mailinator.com",
      role: "member",
    },
    {
      id: "31",
      name: "Ajay Ghosh",
      email: "ajay@mailinator.com",
      role: "member",
    },
    {
      id: "32",
      name: "Chris Lindberg",
      email: "chris@mailinator.com",
      role: "member",
    },
    {
      id: "33",
      name: "Christina Mourujärvi",
      email: "christina@mailinator.com",
      role: "member",
    },
    {
      id: "34",
      name: "Mikhail Bill",
      email: "mikhail@mailinator.com",
      role: "member",
    },
    {
      id: "35",
      name: "Eino Göregen",
      email: "eino@mailinator.com",
      role: "member",
    },
    {
      id: "36",
      name: "Zachariah Johansson",
      email: "zacharaiah@mailinator.com",
      role: "member",
    },
    {
      id: "37",
      name: "Aimaan Mohammed",
      email: "aimaan@mailinator.com",
      role: "admin",
    },
    {
      id: "38",
      name: "Aika Tsunoda",
      email: "aika@mailinator.com",
      role: "member",
    },
    {
      id: "39",
      name: "Kimiko Minamoto",
      email: "kimiko@mailinator.com",
      role: "member",
    },
    {
      id: "40",
      name: "Alyona Baginskaite",
      email: "alyona@mailinator.com",
      role: "member",
    },
    {
      id: "41",
      name: "Anirudh Mukherjee",
      email: "anirudh@mailinator.com",
      role: "member",
    },
    {
      id: "42",
      name: "Alyona Gov",
      email: "alyonagov@mailinator.com",
      role: "member",
    },
    {
      id: "43",
      name: "Robin Singh",
      email: "robin@mailinator.com",
      role: "member",
    },
    {
      id: "44",
      name: "Vijay Vasudevan",
      email: "vijayv@mailinator.com",
      role: "member",
    },
    {
      id: "45",
      name: "Steve Smith",
      email: "steve@mailinator.com",
      role: "member",
    },
    {
      id: "46",
      name: "Anirudh Banerjee",
      email: "anirudhb@mailinator.com",
      role: "member",
    },
  ];
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAllRows, setSelectAllRows] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 

  //  1* 10 = 10
  // current Page value will change
  const indexOfLastItem = currentPage * itemsPerPage;
  // 10-10 = 0
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // gives data between 0 to 10
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectAll(false);
    setSelectedRows([]); // Clear selected rows on page change
  };

  const toggleSelectAll = () => {
    const allIds = data.map((item) => item.id);

    if (!selectAll) {
      const selectedIds = currentItems.map((item) => item.id);
      setSelectedRows((prevSelected) => {
        const updatedSelection = new Set([...prevSelected, ...selectedIds]);
        return Array.from(updatedSelection);
      });
    } else {
      setSelectedRows((prevSelected) =>
        prevSelected.filter((rowId) => !allIds.includes(rowId))
      );
    }

    setSelectAll(!selectAll);
  };

  const toggleSelectAllRows = () => {
    setSelectAllRows(!selectAllRows);
    const selected = !selectAllRows ? data.map((item) => item.id) : [];
    setSelectedRows(selected);
    // const selected = !selectAll ? currentIds : [];
    // setSelectedRows(selected);
  };

  // const toggleSelectAllRows = () => {
  //   const allIds = data.map((item) => item.id);

  //   if (!selectAllRows) {
  //     const selectedIds = data.map((item) => item.id);
  //     setSelectedRows((prevSelected) => {
  //       const updatedSelection = new Set([...prevSelected, ...selectedIds]);
  //       return Array.from(updatedSelection);
  //     });
  //   } else {
  //     setSelectedRows((prevSelected) => prevSelected.filter((rowId) => !allIds.includes(rowId)));
  //   }

  //   setSelectAllRows(!selectAll);

  // };

  const handleDeleteAllRows = () => {
    selectedRows.map((index) => {
      setData((prevData) => prevData.filter((row) => row.id !== index));
    });
  };

  const handleRowSelect = (id) => {
    const newSelectedRows = [...selectedRows];

    // .includes checks whether id eg 1 is there in the array or not and returns boolean results

    if (newSelectedRows.includes(id)) {
      newSelectedRows.splice(newSelectedRows.indexOf(id), 1);
    } else {
      // push into the array
      newSelectedRows.push(id);
    }
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === data.length);
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleCellEdit = (newValue, rowIndex, columnName) => {
    const updatedData = [...data];
    updatedData[rowIndex][columnName] = newValue;
    setData(updatedData);
  };
  const handleEditButtonClick = () => {
    setIsEditing(true); // Set editing mode to true on "Edit" button click
  };

  return (
    <div className="App">
      <section className="head-section">
        <div className="input-box">
          <input type="text" placeholder="Search" />
        </div>
        <div className="selectAll-box">
          <input
            type="checkbox"
            checked={selectAllRows}
            onChange={toggleSelectAllRows}
          />
          Select All Records
        </div>
        <div className="deleteSelected-box">
          <button onClick={() => handleDeleteAllRows()}>
            <AiOutlineDelete />
          </button>
        </div>
      </section>
      <section className="middle-section">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item,index) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleRowSelect(item.id)}
                    />
                  </td>
                  <td>{item.id}</td>
                  {/* <td>{item.name}</td> */}
                  <td>
              <EditableCell
                value={item.name}
                onChange={(newValue) => handleCellEdit(newValue, index, 'name')}
                isEditing={isEditing}
              />
            </td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <div className="action-box">
                      <button onClick={()=>handleEditButtonClick()}>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="end-section">
        <div className="noOfSelectedRows">
          {selectedRows.length} of {data.length} row Selected
        </div>
        <div className="pagination-container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
