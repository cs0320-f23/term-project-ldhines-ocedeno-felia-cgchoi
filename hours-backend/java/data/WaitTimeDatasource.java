package data;

import server.DatasourceException;

public interface WaitTimeDatasource {

    double getData(String seconds, String numStudents) throws DatasourceException;
}
