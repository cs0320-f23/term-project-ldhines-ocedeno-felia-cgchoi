package data.mocks;

import data.WaitTimeDatasource;
import server.DatasourceException;

public class WaitTimeMock implements WaitTimeDatasource {

    public WaitTimeMock() {}

    @Override
    public double getData(String secondsString, String numStudentsString) throws DatasourceException {
        double seconds;
        int numStudents;

        try {
            seconds = Double.parseDouble(secondsString);
            numStudents = Integer.parseInt(numStudentsString);
        } catch (NumberFormatException e) {
            throw new DatasourceException("Couldn't parse provided values, check formatting.");
        }
        
        double totalMinutes = seconds / 60;
        return totalMinutes / numStudents;
    }
}
