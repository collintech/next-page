import React from 'react'

const handler = (req, res) => {
    return (
        res.status(200).json({ text: "hello" })
    )
}

export default handler