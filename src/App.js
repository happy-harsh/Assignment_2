import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import "./table.css";
import { useState } from "react";
import { GrCheckboxSelected } from "react-icons/gr";

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

  // Edit Row Functionality
  const [editingId, setEditingId] = useState("");

  const handleFieldChange = (id, field, value) => {
    const updatedData = data.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [field]: value,
        };
      }
      return row;
    });

    setData(updatedData);
  };

  const handleEditRow = (id) => {
    setEditingId(id);
  };

  const handleUpdateRow = (id) => {
    setEditingId("");
    // You might perform additional actions here if needed
  };

  // Delete Row Functionality
  const handleDeleteRow = (id) => {
    const updatedList = data.filter((row) => row.id !== id);
    setData(updatedList);
    const updatedSelectedRows = selectedRows.filter(selectedId => selectedId !== id);
    setSelectedRows(updatedSelectedRows);
  };

  // Delete All Row Functionality
  const handleDeleteAllRows = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
    setSelectedRows([]);
    setSelectAll(false);
  };

  // Selection Functionality
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSelectRow = (id) => {
    const newSelectedRows = [...selectedRows];

    // .includes checks whether id eg 1 is there in the array or not and returns boolean results

    if (newSelectedRows.includes(id)) {
      newSelectedRows.splice(newSelectedRows.indexOf(id), 1);
    } else {
      // push into the array
      newSelectedRows.push(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAllRows = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedRows(data.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRowPerPage = (e) => {
    e.preventDefault();
    setSelectedRows([]);
    const newSelectedRows = [...selectedRows];
    currentItems.map((item) => {
      // .includes checks whether id eg 1 is there in the array or not and returns boolean results

      if (newSelectedRows.includes(item.id)) {
        newSelectedRows.splice(newSelectedRows.indexOf(item.id), 1);
      } else {
        // push into the array
        newSelectedRows.push(item.id);
      }
    });

    setSelectedRows(newSelectedRows);
    // console.log(newSelectedRows)
  };

  // Pagination
  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  //  1* 10 = 10
  // current Page value will change
  const indexOfLastItem = currentPage * itemsPerPage;
  // 10-10 = 0
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // gives data between 0 to 10
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleGoToPage = (e) => {
    e.preventDefault();
    const inputPage = parseInt(e.target.value);
    if (inputPage >= 1 && inputPage <= totalPages) {
      setCurrentPage(inputPage);
    }
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // setToggle(!toggle)
    // setSelectedRows([]);
  };

  // Search Functionality

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  
    const results = data.filter(
      (row) =>
        Object.values(row).some(
          (value) =>
            typeof value === 'string' && value.toLowerCase().includes(term)
        )
    );
  
    setFilteredData(results);
    setCurrentPage(1); // Reset to the first page after each search
  };
  

  return (
    <div className="App">
      <section className="head-section">

        <div className="selectAll-box">
          <input
            type="checkbox"
            checked={selectAll}
            onClick={handleSelectAllRows}
          />
          Select All Records
        </div>
        <div className="deleteSelected-box">
          <button
            onClick={() => {
              handleDeleteAllRows();
            }}
          >
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
                  <a
                    href=""
                    onClick={handleSelectRowPerPage}
                    style={{
                      background: "white",
                      height: "15px",
                      width: "4px",
                      marginLeft: "2px",
                    }}
                  >
                    <GrCheckboxSelected />
                  </a>
                  {/* <input type="checkbox" checked={toggle} onClick={handleSelectRowPerPage} onChange={handleToggle}/> */}
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
   
                currentItems.map((row) => (
                  <tr key={row.id}>
                    <th>
                      <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                      />
                    </th>
                    <td>{row.id}</td>
                    <td>
                      {editingId === row.id ? (
                        <input
                          type="text"
                          value={row.name}
                          onChange={(e) =>
                            handleFieldChange(row.id, "name", e.target.value)
                          }
                        />
                      ) : (
                        row.name
                      )}
                    </td>
                    <td>
                      {editingId === row.id ? (
                        <input
                          type="email"
                          value={row.email}
                          onChange={(e) =>
                            handleFieldChange(row.id, "email", e.target.value)
                          }
                        />
                      ) : (
                        row.email
                      )}
                    </td>
                    <td>
                      {editingId === row.id ? (
                        <input
                          type="text"
                          value={row.role}
                          onChange={(e) =>
                            handleFieldChange(row.id, "role", e.target.value)
                          }
                        />
                      ) : (
                        row.role
                      )}
                    </td>
                    <td>
                      {editingId === row.id ? (
                        <button onClick={() => handleUpdateRow(row.id)}>
                          Update
                        </button>
                      ) : (
                        <div className="action-box">
                          <button onClick={() => handleEditRow(row.id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDeleteRow(row.id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))

            }

            </tbody>
          </table>
        </div>
      </section>
      <section className="end-section">
        <div className="noOfSelectedRows">
          {selectedRows.length} of {data.length} row Selected
        </div>
        <div className="pagination-container">
          <button onClick={handleFirstPage} disabled={currentPage === 1}>
            First
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Go to Page:
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={handleGoToPage}
            />
          </span>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
