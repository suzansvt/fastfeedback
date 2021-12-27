import React, { useState } from "react";
import { Box, Code, IconButton, Switch } from "@chakra-ui/core";
import { Table, Tr, Th, Td } from "./Table";
import FeedbackRow from "./FeedbackRow";
import { id } from "date-fns/locale";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th minW="150px">Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th width="50px">{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <FeedbackRow key={feedback.id} {...feedback} />
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
