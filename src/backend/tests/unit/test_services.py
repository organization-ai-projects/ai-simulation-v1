from gateway.services.simulation_service import process_data


def test_process_data():
    input_data = {"key": "value"}
    result = process_data(input_data)
    assert result == {"key": "processed_value"}
