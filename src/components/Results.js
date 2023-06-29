import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { collection, getDocs, query, limit } from 'firebase/firestore'
import { db } from '../../src/firebase'
import { Layout, Pagination, Input as Antinput } from 'antd'
import Result from './Result'
import Checkbox from './Checkbox'
import { Link, Route, useLocation } from 'react-router-dom'

const PAGE_SIZE = 5



const Results = () => {
	const { state } = useLocation();
	const [checkboxOptions, setCheckboxOptions] = useState([
		{ label: 'PRP', value: 'PRP', checked: false },
		{ label: 'Stem Cell', value: 'Stem', checked: false },
		{ label: 'Prolotherapy', value: 'Prolo', checked: false },
	]);
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  const [filterTerm, setFilterTerm] = useState(state.searchTerm)
  const [filteredResults, setFilteredResults] = useState([])


	 const handleCheckChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    const updatedOptions = checkboxOptions.map((option) => {
      if (option.value === value) {
        return { ...option, checked };
      }
      return option;
    });

    setCheckboxOptions(updatedOptions);
		console.log(checked)
  };


  const handleChangePage = useCallback((page) => {
    setPage(page)
  }, [])

  const handleInputChange = useCallback((e) => {
    const searchTerm = e.target.value
    setFilterTerm(searchTerm)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'maindata')
        const q = query(collectionRef, limit(100))
        const querySnapshot = await getDocs(q)
        const docs = querySnapshot.docs.map((doc) => doc.data())
        setResults(docs)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])


  useEffect(() => {
    let filteredData = [...results];
    if (filterTerm) {
      filteredData = filteredData.filter(
        (result) =>
          result.description.toLowerCase().includes(filterTerm.toLowerCase()) ||
          checkboxOptions.some(
            (option) =>
              option.checked &&
              result.specialty.toLowerCase().includes(option.value.toLowerCase())
          )
      );
    } else if (checkboxOptions.some((option) => option.checked)) {
      filteredData = filteredData.filter((result) =>
        checkboxOptions.some(
          (option) =>
            option.checked &&
            result.specialty.toLowerCase().includes(option.value.toLowerCase())
        )
      );
    }

    setFilteredResults(filteredData);
    setPage(1);
  }, [results, filterTerm, checkboxOptions]);


  const startIndex = useMemo(() => (page - 1) * PAGE_SIZE, [page])
  const endIndex = useMemo(() => startIndex + PAGE_SIZE, [startIndex])

  const currentResults = useMemo(
    () => filteredResults.slice(startIndex, endIndex),
    [filteredResults, startIndex, endIndex]
  )
  return (
    <Layout className='results'>
      <h1>Results</h1>

      <section className='results-section'>
        <section className='search'>
          <h4>Search</h4>
          <form>
            <Antinput
              className='search-input'
              type='text'
              placeholder='Filter'
              value={filterTerm}
              onChange={handleInputChange}
            />
            {/* <button type='submit'>Filter</button> */}
          </form>
          {checkboxOptions.map((checkbox, index) => <Checkbox
            key={index}
            value={checkbox.value}
            className='checkbox'
            type={checkbox.value}
            checked={checkbox.checked}
            handleCheckChange={handleCheckChange}
                                                    />)}
        </section>

        <section className='results-list'>
          {currentResults.map((result) => (
            <Result result={result} key={result.id} />
          ))}

          <Pagination
            total={filteredResults.length}
            pageSize={PAGE_SIZE}
            current={page}
            onChange={handleChangePage}
          />
        </section>
      </section>
    </Layout>

  )
}

export default Results
