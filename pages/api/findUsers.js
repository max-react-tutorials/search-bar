// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mock_user_data from "../../lib/mock_user_data.json";

export default function findUsers(req, res) {
  const { searchTerm } = req.query;
  const result = mock_user_data.filter(
    ({ first_name, last_name }) =>
      first_name.includes(searchTerm) ||
      last_name.includes(searchTerm) ||
      `${first_name} ${last_name}`.includes(searchTerm)
  );
  res.status(200).json({ result });
}
