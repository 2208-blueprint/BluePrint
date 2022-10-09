import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

function contentSkeleton({ cards }) {
  return Array(cards)
  .fill(0)
  .map((_, i) => (
    <div className="card-skeleton" key={i}>
        <Skeleton />
    </div>
  ));
}

export default contentSkeleton