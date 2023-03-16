import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import { Button, Grid, TextField } from "@mui/material";
function ShortAnswer(props) {

    return (
        <>
            <Grid container style={{ marginTop: 20 }}>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    질문: <TextField placeholder="내용을 입력하세요" fullWidth />
                </Grid>
            </Grid>

        </>
    );
}
export default ShortAnswer;