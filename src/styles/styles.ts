import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 2rem;

    margin: 0 auto;
    max-width: 800px;
`

export const CardAdmin = styled.div`

    margin-top: 1.4rem;

    background: #fff;
    border-radius: 0.4rem;
    padding: 1.4rem 1.6rem;
    box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.15);
    
    > div {
        display: flex;
        align-items: center;

        img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            margin-right: 1rem;
        }
    }

    p {
        margin-top: 1rem;
        font-size: 1.3rem;
        font-weight: 600;
    }
`

export const Hours = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    div, time {
        padding: 0.6rem;
        background: var(--blue);
        border-radius: 0.4rem;

        font-size: 1.2rem;
        color: #fff;
    }

`

export const Service = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
`