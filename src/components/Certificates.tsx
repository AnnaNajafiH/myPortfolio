import React, { useState } from "react";
import {
  FaCertificate,
  FaChevronLeft,
  FaExternalLinkAlt,
  FaChevronRight,
} from "react-icons/fa";
import { certificates } from "../data/certificates";
import { useTranslation } from "react-i18next";

const Certificates: React.FC = () => {
  const { t, ready } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const certificatePerPage = 3;

  // calculate the certificates to display on the current page
  const indexOfLastCertificate = currentPage * certificatePerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatePerPage;
  const currentCertificates = certificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );
  const totalPages = Math.ceil(certificates.length / certificatePerPage);

  // function to handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Wait for translations to load
  if (!ready) return <div>{t("common.loading")}</div>;

  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <FaCertificate className="mr-3 text-blue-500" />
            {t("certificates.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={t("certificates.alt", { title: certificate.title })}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {certificate.title}
                  </h3>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 ml-2"
                      aria-label={t("certificates.viewCertificate", {
                        title: certificate.title,
                      })}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {certificate.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {certificate.date}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="mt-10 flex flex-wrap justify-center items-center">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-3 py-2 mr-1 sm:mr-2 rounded-md flex items-center text-sm sm:text-base ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
              : "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600"
          }`}
        >
          <FaChevronLeft className="mr-1" />{" "}
          <span className="hidden sm:inline">{t("pagination.previous")}</span>{" "}
        </button>
        <div className="max-2 sm:mx-4 flex items-center flex-wrap justify-center">
          {totalPages <= 5 ? (
            Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                  currentPage === i + 1
                    ? "bg-primary-500 text-white font-bold"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))
          ) : (
            // Show limited pages with ellipsis for larger page counts
            <>
              {/* First page */}
              <button
                onClick={() => paginate(1)}
                className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? "bg-primary-500 text-white font-bold"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                1
              </button>

              {/* Show ellipsis if not near the beginning */}
              {currentPage > 3 && (
                <span className="mx-1 sm:mx-2 text-gray-500 dark:text-gray-400">
                  ...
                </span>
              )}

              {/* Pages around current page */}
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNum = i + 1;
                if (
                  pageNum !== 1 &&
                  pageNum !== totalPages &&
                  (pageNum === currentPage - 1 ||
                    pageNum === currentPage ||
                    pageNum === currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                        currentPage === pageNum
                          ? "bg-primary-500 text-white font-bold"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                return null;
              })}

              {/* Show ellipsis if not near the end */}
              {currentPage < totalPages - 2 && (
                <span className="mx-1 sm:mx-2 text-gray-500 dark:text-gray-400">
                  ...
                </span>
              )}

              {/* Last page */}
              <button
                onClick={() => paginate(totalPages)}
                className={`w-8 h-8 sm:w-10 sm:h-10 mx-0.5 sm:mx-1 my-1 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? "bg-primary-500 text-white font-bold"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 ml-1 sm:ml-2 rounded-md flex items-center text-sm sm:text-base ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
              : "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600"
          }`}
        >
          <span className="hidden sm:inline">{t("pagination.next")}</span>{" "}
          <FaChevronRight className="ml-1" />
        </button>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {t("pagination.showing", {
            from: indexOfFirstCertificate + 1,
            to: Math.min(indexOfLastCertificate, certificates.length),
            total: certificates.length,
          })}
        </p>
      </div>{" "}
    </section>
  );
};

export default Certificates;
