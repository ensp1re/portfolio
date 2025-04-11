"use client";

import React, { FC, ReactElement, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { useTranslations } from "next-intl";
import { ICardComponent } from "@src/app/interfaces/main.interface";
import { projectData } from "@src/app/utils/data.utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@src/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const Projects: FC = (): ReactElement => {
  const t = useTranslations("projects");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const translatedProjectData = useMemo(() => {
    return projectData.map((project: ICardComponent) => ({
      ...project,
      title: t(project.title.split(" ")[0].toLowerCase()),
    }));
  }, [t]);

  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? translatedProjectData
      : translatedProjectData.filter((project) => project.category === filter);
  }, [translatedProjectData, filter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    handlePageChange(page);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  const showPagination = filteredProjects.length > ITEMS_PER_PAGE;

  return (
    <motion.section
      id="projects"
      className="lg:ml-0 container-custom gap-10 relative flex w-full min-h-screen flex-col py-[80px] px-5 md:px-10 lg:px-20 bg-sky-50 text-slate-900 border-t-1"
      initial={{ opacity: 0.3, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold relative text-[#050d18]">
        {t("title")}
      </h2>

      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-wrap gap-4 w-full items-center justify-center mx-auto max-w-md">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${filter === "all"
              ? "bg-sky-400 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {t("allProjects")}
          </button>
          <button
            onClick={() => handleFilterChange("landing")}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${filter === "landing"
              ? "bg-sky-400 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {t("landingPages")}
          </button>
          <button
            onClick={() => handleFilterChange("ecommerce")}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${filter === "ecommerce"
              ? "bg-sky-400 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {t("ecommerce")}
          </button>
          <button
            onClick={() => handleFilterChange("blockchain")}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${filter === "blockchain"
              ? "bg-sky-400 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {t("blockchain")}
          </button>
          <button
            onClick={() => handleFilterChange("other")}
            className={`px-4 py-2 rounded-md text-sm md:text-base ${filter === "other"
              ? "bg-sky-400 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {t("other")}
          </button>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-lg">No projects found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] w-full list-none m-0 p-0 gap-6 justify-center md:justify-start">
          {paginatedProjects.map((project: ICardComponent) => (
            <Card
              key={uuidv4()}
              github={project.github}
              title={project.title}
              images={project.images}
              href={project.href}
            />
          ))}
        </ul>
      )}

      {showPagination && (
        <Pagination className="mt-6 flex justify-center">
          <PaginationContent className="flex items-center space-x-2">
            <PaginationItem>
              <PaginationPrevious
                onClick={(e) => handleClick(e, Math.max(1, currentPage - 1))}
                className={`px-3 py-1 rounded-md cursor-pointer hover:text-white ${currentPage === 1
                  ? "pointer-events-none opacity-50 bg-gray-200"
                  : "bg-sky-400 text-white hover:bg-sky-500"
                  }`}
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={(e) => handleClick(e, i + 1)}
                  className={`px-3 py-1 rounded-md cursor-pointer ${currentPage === i + 1
                    ? "bg-sky-400 text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={(e) =>
                  handleClick(e, Math.min(totalPages, currentPage + 1))
                }
                className={`px-3 py-1 rounded-md cursor-pointer text-white ${currentPage === totalPages
                  ? "pointer-events-none opacity-50 bg-gray-200 text-black"
                  : "bg-sky-400 hover:text-white hover:bg-sky-500"
                  }`}
              >
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </motion.section>
  );
};

export default Projects;
