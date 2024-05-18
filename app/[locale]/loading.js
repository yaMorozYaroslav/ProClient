'use client'
import styled from 'styled-components'
import LinearProgress from '@mui/material/LinearProgress';

const Container = styled.div`position: relative;top:200px;height:300px;`
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <Container><LinearProgress/></Container>
}
